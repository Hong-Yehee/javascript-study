### Hello World! 콘솔 출력
브라우저 개발자도구 : command + option + i
JavaScript 공식사이트 : [MDN](http://developer.mozilla.org)

### async vs defer 차이점
html에서 JS를 포함할 때 어떻게 포함하는 것이 효율적일까?
어떤 순서대로 사용자에게 페이지가 보여질까?

- head 안에 script 포함 : HTML 파싱 → JS 파일 다운로드 → HTML 파싱

- body 안 끝부분에 script 포함 : HTML 파싱 → 페이지가 준비가 된 후 → script 받아오고 실행

- head 안에 script를 이용하되 asyn 속성값 사용 : HTML 파싱 → 병렬로 JS 파일을 다운받자 명령함 → 다운로드 완료되면 → 파싱을 멈추고 다운로드 된 파일 실행 → 나머지 HTML 파싱

- head 안에 script를 쓰고 defer : HTML 파싱 하다가 →  defer를 만나면 JS 파일 다운받으라고 명령만 해놓고 → 나머지 HTML 끝까지 파싱 → 마지막에 JS 실행

- head + async 옵션으로 다수의 script를 받게 되면 : 먼저 다운로드 된 파일부터 실행됨

- **head + defer** ( 가장 효율적이고 안전 ) : 파싱하는 동안 필요한 js 파일들을 다운로드 → 순서대로 실행
        

### Use strict!
```javascript
'use strict';
console.log('Hello World!');
```
- 순수 JavaScript를 이용할 때는 제일 윗 부분에 ‘use strict’;을 해주면 좋음

- 브랜든이 자바스크립트 언어를 만들 때 굉장히 빨리 만들었고 유연함

- 유연하다는 것은 때로는 위험하고 개발자가 많은 실수를 알 수 있다는 것

- ECMAScript 5에 선언되어 있음

- 선언되지 않은 변수에 값을 할당한다든지, 기존에 존재하는 프로토타입을 변경하는 등 비상식적인 것을 쓸 수 없게 됨