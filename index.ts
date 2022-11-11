import './style.css';

const appDiv: HTMLElement = document.getElementById('app'); appDiv.innerHTML = `<h2>Facade Pattern<h2/>`;

// =============== Facade Pattern ===============

class BlurayPlayer {
  on() {
    console.log('Bluray player turning on...');
    appDiv.innerHTML += `<h4>Bluray player turning on...</h4>`;
  }

  turnOff() {
    console.log('Bluray turning off..');
    appDiv.innerHTML += `<h4>Bluray turning off..</h4>`;
  }

  play() {
    console.log('Playing bluray disc...');
    appDiv.innerHTML += `<h4>Playing bluray disc...</h4>`;
  }
}

class Amplifier {
  on() {
    console.log('Amp is turning on..');
    appDiv.innerHTML += `<h4>Amp is turning on..</h4>`;
  }

  turnOff() {
    console.log('Amplifier turning off..');
    appDiv.innerHTML += `<h4>Amplifier turning off..</h4>`;
  }

  setSource(source: string) {
    console.log('Setting source to ' + source);
    appDiv.innerHTML += `<h4>Setting source to ${source}</h4>`;
  }

  setVolume(volumeLevel: number) {
    console.log('Setting volume to ' + volumeLevel);
    appDiv.innerHTML += `<h4>Setting volume to ${volumeLevel}</h4>`;
  }
}

class Lights {
  dim() {
    console.log('Lights are dimming..');
    appDiv.innerHTML += `<h4>Lights are dimming..</h4>`;
  }
}

class TV {
  turnOn() {
    console.log('TV turning on..');
    appDiv.innerHTML += `<h4>TV turning on..</h4>`;
  }

  turnOff() {
    console.log('TV turning off..');
    appDiv.innerHTML += `<h4>TV turning off..</h4>`;
  }
}

class PopcornMaker {
  turnOn() {
    console.log('Popcorn maker turning on..');
    appDiv.innerHTML += `<h4>Popcorn maker turning on..</h4>`;
  }

  turnOff() {
    console.log('Popcorn maker turning off..');
    appDiv.innerHTML += `<h4>Popcorn maker turning off..</h4>`;
  }

  pop() {
    console.log('Popping corn!');
    appDiv.innerHTML += `<h4>Popping corn!</h4>`;
  }
}

// -------------------- Facade class --------------------

class HomeTheaterFacade {
  private bluray: BlurayPlayer;
  private amp: Amplifier;
  private lights: Lights;
  private tv: TV;
  private popcornMaker: PopcornMaker;

  constructor(amp: Amplifier, bluray: BlurayPlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
    this.bluray = bluray;
    this.amp = amp;
    this.lights = lights;
    this.tv = tv;
    this.popcornMaker = popcornMaker;
  }

  public watchMovie() {
    this.popcornMaker.turnOn();
    this.popcornMaker.pop();

    this.lights.dim();

    this.tv.turnOn();

    this.amp.on();
    this.amp.setSource('bluray');
    this.amp.setVolume(11);

    this.bluray.on();
    this.bluray.play();
  }

  endMovie() {
    this.popcornMaker.turnOff();
    this.amp.turnOff();
    this.tv.turnOff();
    this.bluray.turnOff();
  }
}

// ------------------------------------------------------------

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
hometheater.watchMovie();