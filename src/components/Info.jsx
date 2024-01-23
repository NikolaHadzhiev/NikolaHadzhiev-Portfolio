import { personalInfo } from "../data"

const Info = () => {
  return (
    <>
    {personalInfo.map(({title, description}, index) => {

        if(title.includes("LinkedIn")){
            return (
                <li className="info__item" key={index}>
                <span className="info__title">{title}</span>
                <a href="https://www.linkedin.com/in/nikola-hadzhiev/" className="info__description">{description}</a>
            </li>
            )
        }else if (title.includes("Github")){
            return (
                <li className="info__item" key={index}>
                    <span className="info__title">{title}</span>
                    <a href="https://github.com/NikolaHadzhiev" className="info__description">{description}</a>
                </li>
            )
        }else {
            return (
                <li className="info__item" key={index}>
                    <span className="info__title">{title}</span>
                    <span className="info__description">{description}</span>
                </li>
            )
        }    
    })}
    </>
  )
}

export default Info