export default function HeroSection(){
    return(
       <section id="heroSection" className="hero--section">
         <div className="hero--section--content--box">
             <div className="hero--section--content">
                <p className="section--title">Hey, ...</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">
                        Software Engineer
                    </span>{""}
                    <br/>
                    xxxx
                </h1>
                <p className="hero--section-description">
                    Lhsdjasdja jbdajsf akskahdhsjhda udahudja
                    <br/>
                    sahgdjasgdsf jfsdbkfhskdfh 
                </p>
             </div>
             <button className="btn btn-primary">Get In Touch</button>
         </div>
         <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section"/>
         </div>
       </section>
    )
}