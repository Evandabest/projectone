import Card from "./card"
import React from "react"

function Cardstack() {

    const data = [
        { Name: "Flora",
          Description : "App to stay on focused on work",
          Image : "src/pictures/flora.jpeg",
          Link: "https://flora.appfinca.com/en/"
        },
        {
          Name: "Anki",
          Description: "Flashcard app",
          Image: "src/pictures/Anki.jpeg",
          Link: "https://apps.ankiweb.net"
        },
        {
          Name: "Notion",
          Description: "App to organize your notes",
          Image: "src/pictures/notion.png",
          Link: "https://www.notion.so"
        },
        {
          Name: "Grammerly",
          Description: "Checks and edits you writing",
          Image: "src/pictures/Grammerly.png",
          Link: "https://app.grammarly.com"
        },
        {
          Name: "Chat-GPT",
          Description: "AI chat bot to assist students",
          Image: "src/pictures/chatgpt.png",
          Link: "https://chat.openai.com"
        },
        {
          Name: "Khanacademy",
          Description: "Platform to learn math",
          Image: "src/pictures/khan.png",
          Link: "https://www.khanacademy.org"
        },
        {
          Name: "Desmos",
          Description: "Free online calculator",
          Image: "src/pictures/desmos.jpeg",
          Link: "https://www.desmos.com"
        },
        {
          Name: "Libgen",
          Description: "Online reservoir of textbooks",
          Image: "src/pictures/libgen.png",
          Link: "https://libgen.is"
        },
        {
          Name: "Youtube",
          Description: "Online resource on various courses",
          Image: "src/pictures/youtube.png",
          Link: "https://www.youtube.com"
        },
        {
          Name: "Socratic",
          Description: "Scanner and finder",
          Image: "src/pictures/socratic.jpeg",
          Link: "https://socratic.org"
        },
        {
          Name: "Evernote",
          Description: "Free note taking app",
          Image : "src/pictures/Evernote.png",
          Link: "https://evernote.com"
        },
        {
          Name: "Quizlet",
          Description: "Flashcard app",
          Image : "src/pictures/quizlet.png",
          Link: "https://quizlet.com"
        }
    
      ]

    return (
    <>
    <div className="flex-wrap gap-2 rounded-md bg-stone-200">
    {
      data.map((data) => {
        return (
          <Card
          Name = {data.Name}
          Description = {data.Description}
          Image = {data.Image}
          Link = {data.Link}
          ></Card>
        )

      })
    }
    </div>
    </>
    )

}

export default Cardstack