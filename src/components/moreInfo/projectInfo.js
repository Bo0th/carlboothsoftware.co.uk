import { hoobankImage, quantumMindAISImage, gerichtImage, videoGameSuggesterImage } from "../../assets"

const projectProps =  {
    hoobank: {
        title: 'Hoobank',
        tagline: 'Hoobank is a banking platform revolutionizing next generation payment methods to improve customer experience.',
        image: {hoobankImage},
        description: '<p>This is a front page for a fictional bank that was built using React. The design was found through the figma community and I was particularly drawn to the colour pallete and assets included so decided to create it.</p> <br /> <p>I used my frontend skills to create the UI which is fully responsive and will work on all device sizes.</p> <br /> <p>Press the view project button below to view the website.</p>' ,
        toolsUsed: ['html', 'css', 'javascript', 'react', 'git', 'github', 'figma'],
        link: 'https://hoobank.carlboothsoftware.co.uk',
        github: 'https://github.com/Bo0th/Hoobank.git'
    },
    quantumMindAIS: {
        title: 'QuantumMind AI Solutions',
        tagline: 'A frontend for a software company pushing the boundaries of current AI technology. AI is a fascinating technology that will only become more prevalent in the future across many industries.',
        image: {quantumMindAISImage},
        description: '<p>Having discovered a compelling design for a software company on Figma, I took the initiative to recreate the entire layout, ensuring full responsiveness across all device sizes.</p> <br /> <p>The original design primarily featured Lorem Ipsum text, which prompted me to utilize ChatGPT to develop a unique company profile. The result? A website that not only showcases a polished and responsive interface but also incorporates a tailored narrative, giving the company a distinctive identity.</p> <br /> <p>Press the view project button below to view the website.</p>' ,
        toolsUsed: ['html', 'css', 'javascript', 'react', 'git', 'github', 'figma'],
        link: 'https://quantummindaisolutions.carlboothsoftware.co.uk',
        github: 'https://github.com/Bo0th/QuantumMind-AI-Solutions.git'
    },
    gericht: {
        title: 'Gericht',
        tagline: 'This landing page is built for a restaurant and is made to look attractive in order to entice potential customers into booking a table.',
        image: {gerichtImage},
        description: `<p>I found the design for a restaurant on figma and wanted to recreate it so did so. It is a fully responsive design so will work on all device sizes.</p> <br /> <p>I wanted to give the website a more 'real' feel as the design had only added Lorem Ipsum so I utilised ChatGPT and created a profile for a restaurant that has a unique story to tell.</p> <br /> <p>Press the view project button below to view the website.</p>` ,
        toolsUsed: ['html', 'css', 'javascript', 'react', 'git', 'github', 'figma'],
        link: 'https://sotto.carlboothsoftware.co.uk',
        github: 'https://github.com/Bo0th/Gericht.git'
    },
    videoGameSuggester: {
        title: 'Video Game Suggester',
        tagline: 'My Video Game Suggester app was conceived from my passion for gaming and is a tool used for video game discovery. It suggests a game based on a selected platform from a pool of over 850k+ games.',
        image: {videoGameSuggesterImage},
        description: `<p>This is a React application that pulls all of it's information from the RAWG API to help the user decide on a game to play for any given platform. It has the ability to suggest a random game or you can use the filters in the Games Catalogue section to search games youself.</p> <br /> <p>Once a game has been selected users will be provided with some relevant info on the game such as a metacritic rating, description, screenshots and a link for where to purchase if one is available.</p> <br /> <p>I started this project with the intention of it being a retro game suggester which is why I've gone for a more retro look to the design however as it was being built it became obvious that including more modern games only added value to the app and that excluding them would have been more work than not.</p> <br /> <p>This was an incredibly fun project to build as linking apps to APIs is something I enjoy very much.</p> ` ,
        toolsUsed: ['html', 'css', 'javascript', 'react', 'git', 'github', 'API'],
        link:'https://videogamesuggester.carlboothsoftware.co.uk',
        github: 'https://github.com/Bo0th/video_game_suggester.git'
    }
}

export default projectProps