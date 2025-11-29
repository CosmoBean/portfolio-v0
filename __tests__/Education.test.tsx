import React from 'react'
import { render, screen } from '@testing-library/react'
import EducationSection from '@/components/EducationSection'
import '@testing-library/jest-dom'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}))

describe('Education Section', () => {
    it('renders the section title', () => {
        render(<EducationSection />)
        expect(screen.getByText(/Education/i)).toBeInTheDocument()
        expect(screen.getByText(/My academic background/i)).toBeInTheDocument()
    })

    it('renders education cards', () => {
        render(<EducationSection />)
        expect(screen.getByText(/Carnegie Mellon University/i)).toBeInTheDocument()
        expect(screen.getByText(/Visvesvaraya National Institute of Technology/i)).toBeInTheDocument()
    })

    it('renders degree details', () => {
        render(<EducationSection />)
        expect(screen.getByText(/Master of Science in AI Engineering/i)).toBeInTheDocument()
        expect(screen.getByText(/Bachelor of Technology/i)).toBeInTheDocument()
    })
})
