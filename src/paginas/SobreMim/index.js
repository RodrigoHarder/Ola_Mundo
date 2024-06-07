import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/sobremim.jpeg'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Ola, eu sou o Rodrigo!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto do Rodrigo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar tortor nibh, ut accumsan purus dictum sit amet. Aenean mi dolor, vulputate vel dignissim eu, rutrum vel libero. Donec condimentum massa est, a placerat turpis eleifend imperdiet. Maecenas lobortis ut magna at ornare. Aenean porta dolor urna. Praesent id dolor blandit, suscipit nisi nec, luctus urna. Phasellus lacinia, erat eget consectetur euismod, tellus leo sollicitudin massa, tempor maximus erat urna et diam. Aenean eget eros vel diam efficitur vehicula finibus in leo. Nullam ac nisi ut enim euismod ornare nec quis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet consectetur eros, sed eleifend justo facilisis id. Duis lectus ipsum, iaculis at eleifend sed, consequat id felis. Curabitur justo turpis, blandit et odio at, interdum varius velit. Integer ac semper ex, ac facilisis felis. Donec luctus dictum purus, congue suscipit velit fringilla nec. Nunc laoreet, risus vel rutrum rhoncus, nulla turpis consectetur ex, eget maximus nisl lectus in lacus. </p>

            <p className={styles.paragrafo}>In hac habitasse platea dictumst. Cras aliquet venenatis pellentesque. Morbi volutpat lectus velit, sed elementum elit convallis id. Suspendisse potenti. Suspendisse suscipit magna id dapibus iaculis. Aenean eget nunc sed justo mollis ultricies. Nulla gravida viverra sagittis. Maecenas dignissim quam vestibulum venenatis mattis. Donec vel vestibulum augue. Cras facilisis, neque non hendrerit semper, dui nisl convallis purus, non ultricies neque urna sit amet augue. Nam elementum pharetra lacus, eget scelerisque mi dapibus at. </p>

            <p className={styles.paragrafo}>Suspendisse nisl urna, commodo sit amet erat quis, vulputate interdum tellus. Vestibulum in facilisis dui. Cras convallis urna gravida lorem varius, nec posuere orci tempor. Sed non nisi semper, fermentum velit nec, ornare nulla. Vivamus non egestas massa, a porttitor metus. Nunc tincidunt ligula ante, at pretium nulla porta sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec volutpat placerat ante scelerisque cursus. Nullam lobortis efficitur nibh, ut rutrum velit rhoncus in. Nullam in augue ante. Quisque magna urna, volutpat in mauris ut, accumsan facilisis elit. Nam eget sollicitudin nibh. Curabitur non felis magna. Mauris vel ipsum a neque lacinia fermentum non a felis. </p>

            <p className={styles.paragrafo}>Nunc diam tellus, porttitor in nibh quis, ornare sollicitudin enim. Nullam dapibus nisl nulla, ut consectetur velit dignissim eget. Aliquam aliquam velit leo, ac convallis neque dignissim vehicula. Maecenas eget sodales velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis id felis non dolor viverra imperdiet. </p>

            <p className={styles.paragrafo}>Ut vitae eros sed massa condimentum tincidunt nec nec metus. Duis lobortis volutpat neque, nec vulputate orci. Sed felis neque, imperdiet ut arcu nec, condimentum hendrerit ipsum. Aliquam semper tellus et porttitor finibus. Nam posuere mauris ac iaculis ornare. Sed aliquam gravida euismod. Sed et diam ornare, euismod neque sit amet, bibendum enim. Nullam ut lectus vitae elit pellentesque dapibus. Phasellus tincidunt tristique nisi et feugiat. In elementum pharetra pulvinar. Suspendisse iaculis aliquet elit quis porttitor. Aliquam ac fermentum nulla. </p>
        </PostModelo>
    )
}    