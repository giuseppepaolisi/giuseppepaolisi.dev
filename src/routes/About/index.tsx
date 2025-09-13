import { ReactElement } from 'react'
//import { ExperienceCard } from '../../components/Cards'

//import { experiences } from '../../data/experiences'

export const About = (): ReactElement => {
    return (
        <div className="space-y-16">
            <section className="container flex flex-col items-center">
                <h3 className="text-silver-900/90 w-full text-lg font-bold underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    About Me
                </h3>
                <div className="mt-4">
                    <div className={`text-md text-silver-700/70 space-y-4 text-justify leading-7`}>
                        <p>
                            Appassionato di programmazione e tecnologia sin da bambino, sono attualmente uno studente magistrale associato all'Università degli Studi di Salerno, in particolare nel curriculum <span className={`font-semibold text-yellow-300/70`}>Software Engineering and IT Management</span>.
                        </p>
                        <p>
                            Mi entusiasma il mondo dei <span className={`text-cerulean font-semibold`}>Large Language Models</span> e le sue potenzialità.
                        </p>
                        <p>
                            Anche se al momento studio e sviluppo in autonomia, ho collaborato in passato per progetti di gruppo e apprezzo la trasparenza come valore professionale.
                        </p>
                        <p>
                            Oltre al tech, amo fare passeggiate all’aperto, praticare sport, cucinare e condividere momenti con il mio cane.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container flex flex-col items-center">
                {/*<h3 className="text-silver-900/90 w-full text-lg font-bold underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    Experience
                </h3>
                <div className="mt-6 flex w-full flex-col items-center gap-6">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
                */}
            </section>
        </div>
    )
}
