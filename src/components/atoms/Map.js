function Map(props) {
    async function main() {
        await window.egip.api
            .login({
                login: "user_api",
                password: '-5V2wJO"!"X4',
            })
            .catch((err) => console.warn(err));
        console.log("Login success!");
        var map = window.egip.layers.createMap({
            target: "map",
            layers: [window.egip.layers.createTiles2GIS()],
            view: window.egip.layers.createViewWGS({}),
        });

        map.setView(window.egip.layers.createView77());
        window.egip.layers.fit77(map);
        map.getView().setZoom(10);
    }
    main();

    return <div id='map' className={props.className}></div>;
}

export default Map;
