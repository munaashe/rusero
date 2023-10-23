import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="mt-32 bg-[rgba(37, 38, 65, 1)]">
                <div className="max-w-lg mx-auto">
                    <div className="flex items-center text-gray-400 text-sm justify-center">
                        <Link href='/privacy' className="pr-3 hover:text-gray-700">
                            Privacy
                        </Link>
                        <Link href='/terms' className="border-l border-gray-400 pl-3 hover:text-gray-700">
                            Terms & Conditions
                        </Link>
                    </div>
                    <div className="text-center text-white">
                        <p className="my-3 text-gray-400 text-sm">&copy; {new Date().getFullYear()} SiDesigned </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer