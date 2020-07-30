input.onButtonPressed(Button.A, function () {
    Explore = 1
})
function Sum_IR () {
    IR_Sum = TobbieII.Read_LBlock() + TobbieII.Read_RBlock()
    return IR_Sum
}
function LookLeftThenRight () {
    TobbieII.leftWard()
    basic.pause(500)
    TobbieII.stopTurn()
    Sum_IR()
    IR_Left = IR_Sum
    TobbieII.rightWard()
    basic.pause(1000)
    TobbieII.stopTurn()
    Sum_IR()
    IR_Right = IR_Sum
    TobbieII.leftWard()
    basic.pause(500)
    TobbieII.stopTurn()
    if (IR_Left < IR_Right) {
        TobbieII.leftWard()
        basic.pause(500)
        TobbieII.stopTurn()
    } else {
        TobbieII.rightWard()
        basic.pause(500)
        TobbieII.stopTurn()
    }
}
let IR_Right = 0
let IR_Left = 0
let IR_Sum = 0
let Explore = 0
Explore = 0
basic.forever(function () {
    IR_Sum = 0
    if (Explore == 1) {
        while (IR_Sum < 600) {
            TobbieII.forward()
            basic.pause(500)
            Sum_IR()
        }
        TobbieII.stopWalk()
        LookLeftThenRight()
    }
})
