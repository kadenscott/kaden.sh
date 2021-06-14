const projects = [
    {
        name: "mc.ksc.sh",
        description: "A Minecraft server filled with tons of cool stuff.",
        hasLink: true,
        link: "https://mc.ksc.sh",
        linkText: "Check it out",
        categories: ["minecraft"]
    },
    {
        name: "Quantum",
        description: "The random teleportation plugin for Minecraft.",
        hasLink: true,
        link: "https://github.com/kadenscott/Quantum",
        linkText: "github.com",
        categories: ["minecraft"]
    },
    {
        name: "startmc.sh",
        description: "A website dedicated to helping you start a Minecraft server!",
        hasLink: true,
        link: "https://startmc.sh",
        linkText: "startmc.sh",
        categories: ["minecraft", "web"]
    },
    {
        name: "BingBonk",
        description: "A fast-paced Minecraft minigame.",
        hasLink: true,
        link: "https://github.com/kadenscott/BingBonk",
        linkText: "github.com",
        categories: ["minecraft"]
    }
]

/**
 * Returns a list of all projects.
 * @param req request
 * @return response
 */
export const get = async (req) => {
    return {body: projects};
}