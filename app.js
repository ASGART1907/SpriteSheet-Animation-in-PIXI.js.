const app = new PIXI.Application({
    width:this.innerWidth,
    heigt:this.innerHeight,
});

document.body.append(app.view);

const loader = PIXI.Loader.shared;

loader.add("sprite","horse.json");
loader.load(setup);

function setup(loaders,resources){
    const textures = [];
    let i;
    for(i = 0; i<6; i++){
        const texture = PIXI.Texture.from(`horse-run-0${i}.png`);
        textures.push(texture);
    }

    const sprite = new PIXI.AnimatedSprite(textures);
    app.stage.addChild(sprite);
    sprite.play();

    sprite.scale.set(3,3);
    sprite.animationSpeed = 0.2;
}