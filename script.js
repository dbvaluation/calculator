class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
        this.currentOperand = ''
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                if (current == 0) break
                computation = prev / current
                break
            default:
                break;
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        currentOperandTextElement.innerHTML = this.getDisplayNumber(this.currentOperand)
        if (this.previousOperand == undefined) return
        if (this.operation != null) {
            this.previousOperandTextElement.innerHTML = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerHTML = ''
        }
    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML)
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML)
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', (button) => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', (button) => {
    console.log(button)
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', (button) => {
    console.log(button)
    calculator.delete()
    calculator.updateDisplay()
})













/*const wrapper = document.querySelector('.wrapper')




// All numbers that are being entered, go here
let arrayInput = []
let result = 0
let lastOperator = ''
let enterButton = ''
let lastInput = []
let multiDivCounter = 0
let firstInput = 0

document.addEventListener('keydown', (e) => {

    if (e.key >= 0 || e.key <= 9) {
        arrayInput.push(e.key)
    }

    // If any operator is entered make a copy of current array
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        lastOperator = e.key
        enterButton = lastOperator
        lastInput = [...arrayInput]
    }

    switch (lastOperator) {
        case '+':
            console.log(`Inside addition: ${typeof (Number(arrayInput.join('')))}`)
            result += Number(arrayInput.join(''))
            arrayInput = []
            lastOperator = ''
            break;

        case '-':
            console.log(`Inside subtraction: ${typeof (Number(arrayInput.join('')))}`)
            result -= Number(arrayInput.join(''))
            arrayInput = []
            lastOperator = ''
            break;

        case '*':
            if (firstInput == 0) {
                result = Number(arrayInput.join(''))
                arrayInput = []
                lastOperator = ''
                firstInput++
                break
            } else {
                console.log(`Inside multiplication: ${typeof (Number(arrayInput.join('')))}`)
                result *= Number(arrayInput.join(''))
                arrayInput = []
                lastOperator = ''
                break;
            }

        case '/':
            if (arrayInput.join('') == 0) {
                console.log('FATAL ERROR')
                arrayInput = []
                lastInput = []
                result = 0
                lastOperator = ''
                enterButton = ''
                firstInput = 0

                break;
            }
            console.log(`Inside division: ${typeof (Number(arrayInput.join('')))}`)
            result /= Number(arrayInput.join(''))
            arrayInput = []
            lastOperator = ''
            break;


        default:
            break;
    }


    if (e.key == 'Enter' || e.key == '=') {
        switch (enterButton) {
            case '+':
                console.log(`Inside addition: ${typeof (Number(arrayInput.join('')))}`)
                result += Number(arrayInput.join(''))
                arrayInput = []
                enterButton = ''
                break;

            case '-':
                console.log(`Inside subtraction: ${typeof (Number(arrayInput.join('')))}`)
                result -= Number(arrayInput.join(''))
                arrayInput = []
                enterButton = ''
                break;

            case '*':
                console.log(`Inside multiplication: ${typeof (Number(arrayInput.join('')))}`)

                result *= Number(arrayInput.join(''))
                arrayInput = []
                enterButton = ''
                break;

            case '/':
                if (Number(arrayInput.join('')) === 0) {

                    console.log('FATAL ERROR')
                    arrayInput = []
                    result = 0
                    enterButton = ''
                    enterButton = ''

                    break;
                }
                console.log(`Inside division: ${typeof (Number(arrayInput.join('')))}`)
                result /= Number(arrayInput.join(''))
                arrayInput = []
                enterButton = ''
                break;


            default:
                break;
        }
        console.log(`Input: ${arrayInput}`)
        console.log(`RESULT: ${result}`)
        arrayInput = []
        result = 0
        enterButton = ''
        enterButton = ''
        firstInput = 0
    } else {
        console.log(`Input: ${arrayInput}`)
        console.log(`RESULT: ${result}`)
    }
















})

*/