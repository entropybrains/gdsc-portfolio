function ProjectCard() {
    return (<div className="bg-slate-800 p-4 rounded-sm">
        {
            props.project.is_featured?(<p className="text-emerald-300 font-mono text-sm">featured project</p>
                
            ):(
                <p></p>
            )
        }
        <p className="text-emerald-300 font-mono text-sm">featured project</p>
        <p className="font-bold">{props.project.title}</p>
        <p className="mt-3">{props.project.desc}
            dcbhdc ycgdy cdf  u dcdgdyg cdy cdy y g gyug yg d  yg u cdfccfyuwcdc ducg dc  d 
            vcdhc yd cdygc ydu cgyd cdy dc gydgc yd gcyg cygdcyggy cc .
        </p>
        <div className="mt-4">
            <a href="https://github.com/entropybrains/gdsc-portfolio" 
            className="underline hover:text-emerald-300 transition duration-300
        >  Github</a>
        <a href ="https://google.com" 
        className="underline ml-4 hover:text-emerald-300 transistion duration-300">website</a>
        </div>
    </div>   
    ); 
}
export default ProjectCard;