### 1994 Netscape Navigator
Marc Andersen
어떻게 하면 동적인 웹사이트를 만들 수 있을까? 고민하다가
Scripting 언어를 추가하자고 생각함

### 1994.9  LiveScript
Brendan Eich
기존의 Scheme 스크립트 언어의 컨셉은 유지하면서 문법은 조금 더 Java스럽게 만들자
10일 안에 만들어보자
프로토타입을 베이스로 한 정말 유연한 새로운 언어 탄생
Netscape Navigator 안에는 LiveScript Interpreter가 포함됨

### 1995 JavaScript
LiveScript 언어로 웹페이지를 만들면 Netscape 브라우저가 이해를 함
당시 Java의 인기가 치솟고 있었어서 LiveScript → JavaScript로 이름을 바꿈

### 1995 Microsoft Internet Explorer
Microsoft사는 우리도 우리만의 브라우저를 출시해야겠다고 생각함
Reverse engineering을 함 : 만들어진 프로그램의 바이너리 코드를 분석해서 소스코드를 복원
JScript라는 이름으로 시장에 내놓음
개발자들 고통의 시발점 ㅎ

### 1997.7 ECMAScript 1
Netscape가 ECMA International에 찾아가서
우리가 JavaScript를 만들었는데 이걸로 표준화를 만들어보자
ECMAScript 1
브라우저의 언어를 만들 때 문법적인 사항들을 정리한 문서

### 2000 Internet Explorer의 시장점유율 95%
We don’t care anymore! 우리가 표준이야!

### 2004 Mozilla Firefox
Mozilla사는 ECMA International에 찾아가서
우리가 ActionScript3라는 멋진 언어가 있고 Tamarin이라는 엔진이 있는데 이걸로 다시 표준화를 검토해보자 제안함
JScript, JavaScript와는 많이 달라 무리가 있었음

### 2004 AJAX
Jesse James Garrett가 AJAX라는 기술명세서
Asynchronous JavaScript and XML
비동기적으로 데이터를 서버에서 받아오고 처리할 수 있도록 도와주는 것

### jQuery 등 라이브러리들의 등장
그러는 동안 개발자들 간 커뮤니티가 형성되기 시작함
jQuery, dojo, mooTools과 같은 라이브러리들이 등장함
다른 브라우저를 신경쓰지 않도록
그 중 jQuery가 많은 사랑을 받게 됨

### 2008 Google Chrome 출시
JIT (just-in-time compilation) JavaScript 실행 속도가 굉장히 빠름
다른 브라우저들은 자극을 받게 됨

### 2009 ECMAScript 5

### 2015 ECMAScript 6
default parameter
class
arrow funciton
const
let

### JavaScript
Mature, Settled down
이제 성숙하고 잘 정착된 언어이다
ECMAScript의 표준사항을 잘 따르기 때문에
라이브러리들 없이도 JavaScript와 Web API들 만으로도
모든 브라우저에서 동작하는 웹어플리케이션을 만들 수 있다

### JavaScript Engines
V8 - Chrome, node, electron
SpiderMonkey - Firefox
JSCore - Safari
Chakra - MS Edge
Carakan - Opera
Tamarin - Adobe Flash

### BABEL
개발할 때는 최신 버전의 ECMAScript를 쓰고
사용자에게 배포할 때는 JavaScript transcompiler로 변환

### SPA
Single Page Application을 쉽게 만들기 위해
React, Angular, view 등 사용

### JavaScript를 배우면 이용할 수 있는 분야가 무궁무진해짐
Node.js : back-end
Reactnative : mobile application
Electron : desktop application

### WA
브라우저에서 동작할 수 있는 유일한 언어는 JS였는데
요즘에는 Web Assemply가 등장해서 웹 어플리케이션 제작 가능
figma도 WA로 만들어짐