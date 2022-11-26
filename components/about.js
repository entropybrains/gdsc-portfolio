function About() {
    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Eleventy',
        'Node.js',
        'WordPress',
        'goland',
    ];
    return (
        <div
            className='about px-7 py-20 flex flex-col items-center justify-center max-w-7xl mx-auto'
            id='about'>
            <h2 className='about-heading flex items-center w-full mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5'>
                About Me
            </h2>
            <div className="Content_container flex gap-12 flex-col sm:flex-row">
                <div className="content_left">
                    <div className="content_aboutme"></div>
                     <p className=""> 
                         vcjsdv jdbcdcdgcdy cygcd ugygc ydcgydg cygc dygcygc dycyc xdgc ygdyg dy sdy
                         chd cdvhcuidc sdjcidjd
                         nc djusdhvduhvudhsdo hsduhc udhudx
                         
                     </p>
                     <p className="mt-4">
                         vcjsdv jdbcdcdgcdy cygcd ugygc ydcgydg cygc{" "}
                          <span className="text-emerald-300">dygcygc</span> dycyc xdgc ygdyg dy sdy
                         chd cdvhcuidc sdjcidjd
                         nc djusdhvduhvudhsdo hsduhc udhudx  
                     </p>
                     <p className="font-bold mt-8"> 
                            Here are some technologies i'm familiar with:{" "}
                            </p>
                    <div className="content_technologies text-slate-300 grid grid-cols-2 mt-8">
                            
                        {
                            skills.map(
                                (skill)=>{
                                    return <p key={skill}>{skill}</p>
                                }
                            )
                        }
                
                    </div>
                        
                </div>
                <div className="Content_right">
                    <img src="/rick.gif" className="w-full sm:w-3/4"/>
                    
                </div>
            </div>
        </div>
    );
}

export default About;
