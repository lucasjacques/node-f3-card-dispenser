const Dispenser = require('./index');


const hasCard = () => {
    myDispenser.disableCheckRfid();
    readRfid();
    move(1);
    myDispenser.enableCheckRfid();
}

const handleHasCardOnGate = () => {
    console.log("Has a card on the gate, please get your card!")
}

const handleNoCardIn = () => {
    console.log("There is no card in!")
}

// INSTANCE OF DISPENSER

const myDispenser = new Dispenser({ port: 3, baudrate: 9600, allowInsert: true, intervalTimeout: 1000, handleHasCard: hasCard, handleHasCardOnGate, handleNoCardIn });

const disconnect = () => {
    console.log("chamei para desconectar")
    myDispenser.disconnect().then((bew) => {
        console.log(bew)
    }).catch((err1) => {
        console.log(err1)
    })
}

const checkSensorStatus = () => {
    myDispenser.checkSensorStatus().then((status) => {
        console.log(status, "status!");
        disconnect()
    }).catch((err) => {
        console.log(err)
    })
}

const move = (position) => {
    myDispenser.move(position).then((move) => {
        console.log(move);
        // checkSensorStatus()
        // checkDispenserStatus();
        // denyInsertCard();
    }).catch((err) => {
        console.log(err)
    })
}

const checkDispenserStatus = () => {
    myDispenser.checkDispenserStatus().then((status) => {
        console.log(status, "status!");
    }).catch((err) => {
        console.log(err)
    })

}

const allowInsertCard = () => {
    myDispenser.allowInsertCard().then((status) => {
        console.log(status, "status!");
        setTimeout(() => {
            move(1)
        }, 5000)
    }).catch((err) => {
        console.log(err)
    })
}

const denyInsertCard = () => {
    myDispenser.denyInsertCard().then((status) => {
        console.log(status, "status!");
    }).catch((err) => {
        console.log(err)
    })
}

const moveStraightOut = () => {
    myDispenser.moveStraightOut().then((status) => {
        console.log(status, "status!");
    }).catch((err) => {
        console.log(err);
    })
}

const checkIndividualStatus = () => {
    myDispenser.cardBoxStatus().then((status) => {
        console.log(status, "CardBoxStatus!");
        myDispenser.captureBoxIsFull().then((status1) => {
            console.log(status1, "CaptureBox!");
            myDispenser.hasCard().then((status2) => {
                console.log(status2, "HasCard!");
            }).catch((err2) => {
                console.log(err2);
            })
        }).catch((err1) => {
            console.log(err1);
        })
    }).catch((err) => {
        console.log(err);
    })
}

const inicializeCard = () => {
    myDispenser.inicializeCard().then((bew) => {
        console.log(bew);
    }).catch((err1) => {
        console.log(err1)
    })
}

const readRfid = () => {
    myDispenser.readRfid().then((bew) => {
        console.log(bew);
    }).catch((err1) => {
        console.log(err1)
    })
}

const autoReadEnable = () => {
    let enabled = myDispenser.enableCheckRfid();
    console.log(enabled);
}

const init = () => {
    myDispenser.connect().then((bew) => {
        console.log("Connected!");
        autoReadEnable();
    }).catch((err1) => {
        console.log(err1)
    })
}

init()