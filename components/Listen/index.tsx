import { useEffect, useState } from 'react'
import SpeakerSVG from '../Icons/speaker'

interface PlayProps {
    src?: string
    color?: string
    bgColor?: string
    audio_file?: string
}
const PlayAudio = ({ src, color,bgColor, audio_file }: PlayProps) => {
    const [show, setShow] = useState(false)
    const [audioDom, setAdudioDom] = useState<HTMLAudioElement | null>(null)
    const [playPause, setPlayPause] = useState(false)

    useEffect(() => {
        if (audioDom && playPause === true) {
            audioDom.play()
        }
        if (audioDom && playPause === false) {
            audioDom.pause()
        }
    }, [audioDom, playPause])

    //   const IsplayMusic = () => {
    //     setPlayPause(!playPause);
    //   };

    if (show) {
        return (
            <div className="md:flex h-14 ">
                <audio
                    controls
                    ref={(element) => setAdudioDom(element)}
                    src={audio_file ? audio_file :"https://www.naatsharif.com/download-mp3/owais-raza-qadri/aye-aaqa-madni-aaqa.mp3"}
                />
                <button
                    onClick={() => setShow(false)}
                    className="bg-red-800 md:p-4 p-2 rounded text-white ml-2"
                >
                    Close
                </button>
            </div>
        )
    }
    return (
        <button
            className={`md:ml-2 mt-2 md:mt-0 w-full md:w-auto h-14 flex items-center p-2 border rounded ${
                color
                    ? 'border-[' + color + '] text-[' + color + '] bg-' + bgColor + ''
                    : 'border-teal-900 text-teal-900'
            } `}
            onClick={() => setShow(true)}
        >
            <SpeakerSVG color={color} />
            <p className={`ml-2 ${color ?  'text-white' : "" }`}>Listen</p>
        </button>
    )
}

export default PlayAudio
