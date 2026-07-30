№ Вираз МояГіпотеза РеальнийРезультат Пояснення
// 1
typeof 42 – number – number – 42 звичайне числом, тому typeof повертає number

// 2
typeof 42n – bigint – bigint – це тип BigInt, а typeof повертає bigint

// 3
typeof 'hello' – string – string – значення взяте в лапки, тому це рядок і його тип — string.

// 4
typeof true – boolean – boolean – true є булевим значенням, тому результат boolean

// 5
typeof undefined – undefined – undefined – undefined є окремим типом у JS, тому typeof повертає undefined

// 6
typeof null – object – object – null насправді означає відсутність значення, але через особливість JS typeof повертає object

// 7
typeof NaN – number – number – це не число, але у JS він все одно належить до типу number

// 8
typeof Infinity – number – number – так як це спеціальне числове значення, то його тип відноситься до number

// 9
typeof Symbol('id') – symbol – symbol – створює значення типу Symbol, тому те і повертає

// 10
typeof {} – object – object – створює звичайний об’єкт, тому результат — object

// 11
typeof [] – object – object – [] є масивом, але typeof не має окремого типу для масивів і визначає його як object

// 12
typeof [1, 2, 3] – object – object – теж масив, тому typeof повертає object, навіть якщо всередині є числа

// 13
typeof function() {} – function – function – звичайна функція, тому typeof визначає її як function

// 14
typeof (() => {}) – function – function – стрілочна функція, вона теж має тип function

// 15
typeof (2 + 2) – number – number – 2 + 2 обчислюється як 4, а це число

// 16
typeof ('2' + 2) – string – string – число перетворюється в рядок, виходить '22', а його тип виходить string

// 17
typeof ('foo' - 'bar') – string – number – віднімання намагається перетворити рядки в числа, але оскільки це неможливо, виходить NaN, а NaN має тип number

// 18
let x;
typeof x – undefined – undefined – оголошена змінна, але без присвоєного значення, тому undefined

// 19
typeof nonExistentVariable – undefined – undefined - змінної взагалі не існує, але typeof у такому випадку повертає undefined

// 20
typeof typeof 42 – string – string – перший typeof 42 повертає рядок "number". Потім другий typeof перевіряє вже цей рядок, тому результат string.

Підозрілі справи

typeof null
typeof null повертає object, хоча null не є звичайним об’єктом. Це виглядає як баг або дивна особливість JS, яка залишилась ще з перших версій мови.
Порада собі: якщо треба перевірити саме null, краще викор. value === null.

typeof []
typeof [] повертає object, хоча ми знаємо, що це масив. typeof просто не розрізняє масиви та звичайні об’єкти.
Порада собі: для перевірки масиву використовувати Array.isArray(value).

typeof NaN
NaN розшифровується як «Not a Number», тому спочатку здається дивним, що typeof NaN повертає number. Але в JS NaN є спеціальним значенням саме типу number.
Порада собі: якщо треба перевірити саме NaN, використовувати Number.isNaN(value).

typeof nonExistentVariable
Змінної nonExistentVariable взагалі не існує, тому можна було очікувати помилку. Але typeof для неіснуючої змінної повертає undefined замість помилки.
Порада собі: пам’ятати, що typeof має таку особливість, і не використовувати його як загальну перевірку існування змінної.
