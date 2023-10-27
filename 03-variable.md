### Variable
- 변수 : 변경될 수 있는 값
- let이라는 키워드 이용 (ES6)
- name이라는 변수가 가리키는 메모리 어딘가에 ellie라는 값을 저장

### Block scope
- { } 밖에서는 블럭 안의 내용을 볼 수 없음
- let globalName 글로벌 변수는 어플리케이션 실행부터 끝날 때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋음
- 가능하면 필요한 부분에서만 정의해서 쓰는 게 좋음

### let vs var
- 변수를 선언할 때는 let 사용 (ES6)
- var는 이제 쓰지말자! hoisting이 됨, block scope을 무시함 - 위험

### hoisting
- 어디에 선언했는지에 상관 없이 제일 위로 선언을 끌어올려주는 것
- var hoisting

### Constant
- 한 번 할당하면 값이 절대 바뀌지 않음
- 가리키고 있는 포인터가 잠겨있음. 값을 선언함과 동시에 할당하면 값을 변경할 수 없음
- Mutable data type : 값이 계속 변경될 수 있는 것
- Constant는 Immutable data type

### favor immutable data type always
1. security : 한 번 작성한 값을 다른 해커들이 코드를 삽입해서 값을 변경하는 것 방지
2. thread safety : 어플리케이션이 실행되면 한 가지 프로세스가 할당이 되고, 그 프로세스 안에서는 다양한 thread가 동시에 돌아감. 다양한 thread들이 동시에 변수에 접근해서 값을 변경하는 것 방지
3. reduce human mistakes

### 정리
1. Mutable : `let`
2. Immutable : `const`

### Primitive variable types
primitive type : 더 이상 작은 단위로 나눠질 수 없는 한 가지 아이템

- number, string, boolean, null, undefined, symbol
- object(싱글 아이템들을 여러개 묶어서 한 박스로 관리할 수 있게 해줌), box container
- function, first-class function(function도 다른 데이터타입처럼 변수에 할당 가능, 함수의 parameter로도 전달, return도 가능)

### number
- 숫자는 모두 number로 사용하면 됨
- infinity, -infinity, NaN
- (최근에 추가된 bigInt) 숫자 끝에 n붙이면 bigInt 타입

### string
- 한 가지 글자든 여러개 글자든 모두 string 타입
- 일반  string과 다른 변수 붙일 수 있음
- template literals(=template string) : console.log(value: ${helloBob}, type: ${typeof helloBob});

### boolean
- false : *0, null, undefined, NaN, ''(빈값)*
- true : *any other value*

### null
- 너는 비어있는 empty 값이야 (null로 값 할당됨)

### undefined
- 선언은 되었지만 값이 지정되어있지 않음 (비었는지 값이 들었는지 아직 정해지지 않음)

### symbol
- 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때

### object

### function

### Dynamic typing
- JavaScript는 dynamically typed language ↔ statically
- 선언할 때 어떤 타입인지 선언하지 않고 runtime, 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있다는 것
- 빠르게 프로토타이핑을 할 때는 유용하나..