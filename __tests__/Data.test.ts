import { greeting, socialMediaLinks } from '@/lib/data'

describe('Data Integrity', () => {
    it('has a valid resume link', () => {
        expect(greeting.resumeLink).not.toBe('#')
        expect(greeting.resumeLink).toContain('drive.google.com')
    })

    it('has the correct GitHub profile', () => {
        expect(greeting.githubProfile).toBe('https://github.com/cosmobean')
    })

    it('has the correct nickname', () => {
        expect(greeting.nickname).toBe('cosmobean')
    })

    it('has updated social media links', () => {
        const githubLink = socialMediaLinks.find(link => link.name === 'Github')
        expect(githubLink?.link).toBe('https://github.com/cosmobean')

        const linkedinLink = socialMediaLinks.find(link => link.name === 'LinkedIn')
        expect(linkedinLink?.link).toBe('https://linkedin.com/in/sri-datta-bandreddi')
    })
})
