import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/inicio.jpg'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá mundo!
                </h1>
                <p className={styles.paragrafo}>
                Oi, sou o Rodrigo, monitor do fórum da Alura e estudante de React. Boas vindas ao meu ambiente de aprendizado, por aqui vou compartilhar muitos conteúdos sobre essa biblioteca que faz um sucesso no mundo Front-end.
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} alt="" src={circuloColorido} aria-hidden={true}/>
                <img className={styles.minhaFoto} src={minhaFoto} alt="foto do Rodrigo na frente de um espelho" aria-hidden={true}/>
            </div>
        </div>
    )
}