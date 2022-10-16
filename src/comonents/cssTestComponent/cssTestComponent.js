import StyleTest from './cssTestStyle.module.css'

function CssTestComponent(){
    console.log(StyleTest)
    return (
        <div className={StyleTest.container} >
            <h1 className={StyleTest.h1Test}>CssTestComponent - h1 </h1>
            <p className={StyleTest.pTest}>CssTestComponent - p</p>
            <button className={StyleTest.btn}>CssTestComponent</button>
        </div>
    )
}
export default CssTestComponent