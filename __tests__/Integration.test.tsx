import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'

// Mock child components to simplify integration test
jest.mock('@/components/AnimatedVisual', () => () => <div data-testid="animated-visual" />)
jest.mock('@/components/ProjectsSection', () => () => <div data-testid="projects-section" />)
jest.mock('@/components/ExperienceSection', () => () => <div data-testid="experience-section" />)
jest.mock('@/components/SkillsSection', () => () => <div data-testid="skills-section" />)
jest.mock('@/components/AboutSection', () => () => <div data-testid="about-section" />)
jest.mock('@/components/ContactSection', () => () => <div data-testid="contact-section" />)

// We keep Navbar and TerminalOverlay real to test their interaction if possible, 
// or mock them if they cause issues. Let's try keeping them real but mocking their internal heavy stuff if needed.
// Actually, Navbar uses Link which needs Next.js router context usually, but in App Router it might be fine or need mocking.
// Let's mock the router just in case.

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn(),
        }
    },
    usePathname() {
        return ''
    },
}))

describe('Home Page Integration', () => {
    it('renders the navbar and terminal button', () => {
        render(<Home />)
        const logoElements = screen.getAllByText(/Cosmobean/i)
        expect(logoElements.length).toBeGreaterThan(0) // Logo name and potentially hero text
        expect(screen.getByText(/Open Terminal/i)).toBeInTheDocument()
    })

    it('opens terminal when button is clicked', () => {
        render(<Home />)
        const button = screen.getByText(/Open Terminal/i)
        fireEvent.click(button)
        expect(screen.getByText(/guest@sridatta-portfolio/i)).toBeInTheDocument()
    })
})
