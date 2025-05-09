import { communityLinks, platformLinks, resourcesLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="mt-8 py-12 border-t border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                <div>
                    <h3 className="mb-4 font-semibold">Resources</h3>
                    <ul className="space-y-2 ">

                        {resourcesLinks.map(link => (
                            <li key={link.text}>
                                <a href="" className="text-neutral-400 hover:text-neutral-300">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-semibold">Platform</h3>
                    <ul className="space-y-2">

                        {platformLinks.map(link => (
                            <li key={link.text}>
                                <a href="" className="text-neutral-400 hover:text-neutral-300">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-semibold">Community</h3>
                    <ul className="space-y-2">

                        {communityLinks.map(link => (
                            <li key={link.text}>
                                <a href="" className="text-neutral-400 hover:text-neutral-300">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer