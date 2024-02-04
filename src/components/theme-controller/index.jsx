
const ThemeController = () => {
    return (<div className="flex flex-col ms-3">
                <label className="mb-2">Theme</label>
                <input type="checkbox" value={localStorage.getItem("theme") ==="pastel"  ? "mytheme": "pastel" } className="toggle theme-controller" onChange={(e) => { localStorage.setItem("theme", e.target.checked ? "pastel" : "mytheme")}} />
            </div>)
}
export default ThemeController;