import { ReactElement } from 'react'

/**
 * Footer
 * @constructor
 */
export const Footer = (): ReactElement => {
    // Get the current year
    const currentYear = new Date().getFullYear()

    return (
        <footer className="mb-6 mt-12">
            <div className="flex justify-center space-x-2 text-sm text-silver-500/80">
                <span>© {currentYear} Giuseppe Paolisi.</span>
                <span>All Rights Reserved.</span>
            </div>
        </footer>
    )
}
