import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import TerminalOverlay from '@/components/TerminalOverlay'
import '@testing-library/jest-dom'

// Mock scrollIntoView since it's not implemented in JSDOM
window.HTMLElement.prototype.scrollIntoView = jest.fn()

describe('TerminalOverlay Component', () => {
    const mockClose = jest.fn()

    beforeEach(() => {
        mockClose.mockClear()
    })

    it('does not render when isOpen is false', () => {
        render(<TerminalOverlay isOpen={false} onClose={mockClose} />)
        expect(screen.queryByText(/guest@sridatta-portfolio/i)).not.toBeInTheDocument()
    })

    it('renders when isOpen is true', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        expect(screen.getByText(/guest@sridatta-portfolio/i)).toBeInTheDocument()
        expect(screen.getByText(/Welcome to the portfolio terminal/i)).toBeInTheDocument()
    })

    it('closes when close button is clicked', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const closeButton = screen.getAllByRole('button')[0] // The X button
        fireEvent.click(closeButton)
        expect(mockClose).toHaveBeenCalled()
    })

    it('closes when Escape key is pressed', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')
        fireEvent.keyDown(input, { key: 'Escape' })
        expect(mockClose).toHaveBeenCalled()
    })

    it('handles "help" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'help' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(screen.getByText(/Available commands:/i)).toBeInTheDocument()
        expect(screen.getByText(/about - Who am I\?/i)).toBeInTheDocument()
    })

    it('handles "about" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'about' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        const elements = screen.getAllByText(/AI Engineer & Full Stack Developer/i)
        expect(elements.length).toBeGreaterThan(0)
    })

    it('handles "projects" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'projects' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(screen.getByText(/Recent Projects:/i)).toBeInTheDocument()
    })

    it('handles "experience" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'experience' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(screen.getByText(/Experience:/i)).toBeInTheDocument()
    })

    it('handles "skills" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'skills' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(screen.getByText(/Skills:/i)).toBeInTheDocument()
    })

    it('handles "contact" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'contact' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(screen.getByText(/Contact me at:/i)).toBeInTheDocument()
    })

    it('handles "clear" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        // First add some output
        fireEvent.change(input, { target: { value: 'help' } })
        fireEvent.keyDown(input, { key: 'Enter' })
        expect(screen.getByText(/Available commands:/i)).toBeInTheDocument()

        // Now clear
        fireEvent.change(input, { target: { value: 'clear' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(screen.queryByText(/Available commands:/i)).not.toBeInTheDocument()
    })

    it('handles "exit" command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'exit' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(mockClose).toHaveBeenCalled()
    })

    it('handles unknown command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'foobar' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(screen.getByText(/Command not found: foobar/i)).toBeInTheDocument()
    })

    it('handles empty command', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: '   ' } })
        fireEvent.keyDown(input, { key: 'Enter' })

        // Should just add a new line, effectively doing nothing visible except clearing input
        expect(input).toHaveValue('')
    })

    it('closes when overlay background is clicked', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        // The overlay background is the outer div.
        // It has fixed inset-0.
        // We can find it by class or just the first div?
        // Let's assume it's the first child of the portal/root if we rendered it directly.
        // Actually, we can find by role? No role.
        // Let's find by text content? No.
        // Let's use the fact that it has `onClick={onClose}`.

        // We can find the outer container.
        // It has class "fixed inset-0".
        // Let's try to find by a test id if we added one, but we didn't.
        // Let's try to click the element that wraps everything.
        // In the test render, it's the first child of the container?
        // render returns container.
        // const { container } = render(...)
        // fireEvent.click(container.firstChild)

        const { container } = render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const overlay = container.firstChild
        if (!overlay) throw new Error('Overlay not found')

        fireEvent.click(overlay)
        expect(mockClose).toHaveBeenCalled()
    })

    it('does NOT close when terminal window is clicked (propagation)', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const terminalWindow = screen.getByText(/guest@sridatta-portfolio/i).closest('div')?.parentElement?.parentElement
        // The header is inside the window.
        // "guest@..." is in a span, inside a div, inside the header div, inside the window div.
        // Let's just find the text "Welcome to the portfolio terminal" which is in the body.
        // Or just click the input.
        const input = screen.getByRole('textbox')
        fireEvent.click(input)
        expect(mockClose).not.toHaveBeenCalled()
    })

    it('focuses input when terminal body is clicked', () => {
        render(<TerminalOverlay isOpen={true} onClose={mockClose} />)
        const input = screen.getByRole('textbox')

        // Blur input first
        input.blur()
        expect(input).not.toHaveFocus()

        // Click on the body text
        const bodyText = screen.getByText(/Welcome to the portfolio terminal/i)
        fireEvent.click(bodyText)

        // The click handler is on the parent container of the text.
        // It should trigger focus.
        expect(input).toHaveFocus()
    })
})
