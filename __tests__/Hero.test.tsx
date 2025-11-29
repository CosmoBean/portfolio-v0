import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import '@testing-library/jest-dom'

// Mock AnimatedVisual to avoid complex rendering in tests
jest.mock('@/components/AnimatedVisual', () => {
    return function DummyAnimatedVisual() {
        return <div data-testid="animated-visual">Animated Visual</div>
    }
})

describe('Hero Component', () => {
    it('renders the correct name', () => {
        render(<Hero />)
        expect(screen.getByText(/Sri Datta Ganesh Bandreddi/i)).toBeInTheDocument()
    })

    it('does NOT render the "Available for work" badge', () => {
        render(<Hero />)
        expect(screen.queryByText(/Available for work/i)).not.toBeInTheDocument()
    })

    it('renders the "View Projects" button', () => {
        render(<Hero />)
        expect(screen.getByText(/View Projects/i)).toBeInTheDocument()
    })

    it('renders the "Resume" button', () => {
        render(<Hero />)
        expect(screen.getByText(/Resume/i)).toBeInTheDocument()
    })
})
