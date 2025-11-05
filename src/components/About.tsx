export default function About() {
    return (
        <div className="mx-auto text-primary max-w-400 px-5 my-10">
            <div className="flex max-md:items-center max-md:justify-center flex-col md:grid grid-cols-8 gap-4">
                <div className="bg-foreground rounded-xl p-4 sm:p-6 space-y-3 col-span-6">
                    <h2 className="font-title text-3xl">Quem sou?</h2>
                    {/* Usar versão fina da fonte */}
                    <p className="text-xl">Olá, sou Procópio, tenho 19 anos e estou em desenvolvimento como designer. Atualmente curso o 4° semestre do bacharelado em Design, onde venho criando projetos autorais e buscando oportunidades em freelances. No momento, meu foco é ampliar meu portfólio e conquistar uma vaga de estágio em um estúdio de design, para evoluir profissionalmente e viabilizar meus estudos. Como designer, meu objetivo é desenvolver projetos que transmitam de forma clara e criativa a mensagem dos meus clientes para o público-alvo.</p>
                </div>
                <div className="w-full h-full overflow-hidden rounded-xl col-span-2">
                    <img
                        src="https://res.cloudinary.com/dflvo098t/image/upload/c_crop,x_0,y_75,w_800,h_500/v1762373525/procopio_wp3slo.jpg"
                        alt="Procópio"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
