# Hollmini's javascript

## Javascript 란?
Javascript는 인터렉티브한 기능을 웹 사이트에 추가할 때 사용하는 프로그래밍 언이이다.<br>예를 들면 게임, 버튼이 눌릴때나 form에 정보가 입력 되었을 때 발생하는 것, 동적인 스타일 효과, 애니메이션 등이 있다.

## 어떤 일을 할 수 있을까?
자바스크립트 언어의 핵심은 다음과 같은 기능을 하는것이다.
- 변수안에 값을 저장할 수 있다. 
- 프로그래밍에서 '문자열'이라고 불리는 문자들도 조작 가능하다.
- 웹 페이지 상의 이벤트에 따라 응답하는 코드를 운영할 수 있다.
- 그 외 다양한 것들이 가능하다.

## API(Application Programming Interfaces)란?
API는 이미 만들어진 코드의 집합체라고 볼 수 있으며, 개발자들이 만들기 어렵고 힘든 부분을 쉽게 구현하도록 하는 프로그램이라고 볼 수 있다. 마치 집에서 가구를 만들 때 직접 디자인하고, 재료를 구하고, 재단하고, 못을 박고 하는 등 혼자서 모든것을 하는 대신 가구 만들기 키트를 사는 것과 같다고 보면 된다. API는 일반적으로 두 종류로 나눠지는데,

### Browser API
웹 브라우저에 설치된 API들로, 컴퓨터 환경구성으로 부터 데이터를 보이게 하고 복잡한 일들을 하게 한다.
- **DOM(Documnet object model) API**는 동적으로 페이지의 스타일을 정하는 등 HTML과 CSS를 알맞게 조정하는 역할을 한다.
- **Geololcation API**는 지리적인 정보를 검색하게 해준다. 이는 (Goolgle Maps)[https://www.google.com/maps]이 어떻게 위치를 찾고 지도에 표시하는지 알 수 있게 한다.
- **Canvas와 WebGL API**는 2D와 3D 그래픽을 만들수 있도록 해준다.
- HTMLMediaElement와 (WebRTC)[https://experiments.withgoogle.com/search?q=WebGL] 같은 **Audio and Video API**는 음악과 비디오를 웹 페이지상에서 재생하고, 웹캔으로 캡쳐하고 다른 컴퓨터에 표시하는 등의 멀티미디어를 활용할 수 있는 기술을 지원한다.

### Third party API
브라우저에 기본적으로 설치된 API가 아닌 인터넷에서 개인적으로 정보와 코드를 얻어 프로그래밍한 것을 말한다. 다양항 API중에 두가지를 소개 한다.
- [Twitter API](https://developer.twitter.com/en/docs) 웹사이트에 가장 최근의 트윗을 보여주도록 한다.
- (Google Maps API)[https://cloud.google.com/maps-platform/]와 (OpenStreetMap API)[https://wiki.openstreetmap.org/wiki/API]는 웹사이트에 원하는 지도를 넣고, 작동하도록 해준다.

## 웹 페이지에서 Javscript가 하는 일은 무엇인가?
브라우저에서 웹 페이지를 불러올 때, 실행 환경(브라우저) 안에서 HTML, CSS, Javscript 코드가 실행된다. 자바스크립트는 HTML과 CSS가 결합되고 웹페이지 상에서 나타난 후, 브라우저의 자바스크립트 엔진에 의해 실행된다. 이는 곧 페이지의 구조와 스타일을 정해 놓고 자바스크립트가 실행된다는 것이다.
동적으로 사용자 인터페이스를 업데이트하는 자바스크립트의 사용은 Document Object Model API를 통해 HTML과 CSS를 수정하는 것으로 좋은 현상이다. 만약 자바스크립트가 HTML과 CSS 전에 실행되었다면 분명 문제가 발생할 것이다.

## 자바스크립트 실행 순서
브라우저에서 자바스크립트를 만났을 때 일반적으로는 위에서 아래순으로 실행된다. 순서에 주의해서 코드를 작성해야한다는 것이다.
```javascript
const para = document.querySelector('p');
//HTML 요소 중 p태그를 선택

para.addEventListener('click', updateName);
//para에 저장된 객체가 클릭되었을 때 updateName 함수를 실행

function updateName() {
  let name = prompt('Enter a new name');
  //'Enter a new name'과 입력란 출력하여 입력받은 값을 name에 저장
  para.textContent = 'Player 1: ' + name;
  //papa(p태그)에 새로운 문자열 저장
}
```

## 자바스크립트의 로딩 방법
작성된 스크립트를 브라우저가 적절한 때에 로딩하는것에는 몇가지 이슈가 있다. 모든 HTML요소는 순서대로 페이지에 로드된다. 만약 자바스크립트를 이용해 DOM을 조작할 경우, 자바스크립트 코드가 DOM보다 먼저 실행된다면 조작할 요소가 존재하기 않는 상태이기 때문에 제대로 동작하지 않는다.

- **내부 자바스크립트 예제**에서의 해결법
```javascript
document.addEventListener("DOMContentLoaded", function() {
  ... 
});
```

- **외부 자바스크립트**에서의 해결법
```html
<script src="script.js" async></script>
```
좀 더 최신의 자바스크립트 문법인 async 속성을 사용하게 된다. 일반적으로 HTML요소를 로딩하는 중 scirpt태그를 만나면 JavaScript의 내용이 모두 다운될 때까지 HTML로딩은 멈추게 되는데, async요소는 비동기방식으로 script태그에 도달했을 때 브라우저에게 HTML 요소를 멈추지 않고 다운받도록 유지시킨다.
예전 방식은 script 요소를 body 태그 맨 끝에 넣는 방법이 있었으나, 이 방법은 DOM이 로드되기 전까지 script의 로딩과 파싱이 완전히 차단되어 규모가 큰 사이트의 경우 사이트를 느리게 만드는 중요한 성능 문제를 일으킬 수 있다.


## 객체란?
자바스크립트의 기본 타입(data type)은 객체(object)이다. 객체란 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합니다. 프로퍼티 값으로 함수가 올 수도 있으며, 이 프로퍼티를 메소드(method)라고 한다.
```javascript
객체(object)
- cat

프로퍼티(property)
- cat.name = "나비"
- cat.family = "코리안 숏 헤어"
- cat.age = 0.1
- cat.weight = 300

메소드(method)
- cat.mew()
- cat.eat()
- cat.sleep()
- cat.play()
``` 
자바스크립트에서는 순자, 문자열, 불리언, undefined 타입을 제외한 모든 것이 객체이다. 

### 객체의 생성
자바크스립트에서 객체를 생성하는 방법은 세가지가 있다.

1. 리터널 표기(literal notation)를 이용한 방법
객체를 생성하는 가장 쉬운 방법으로 각각의 프로퍼티는 이름과 값을 콜론(:)으로 연결하고, 쉼표를 사용해 다른 프로퍼티와 구분 한다. 프로퍼티의 이름으로는 자바스크립트의 식별자(identifier)나 문자열을 사용할 수 있다.
```javacsript
var 객체이름 = {
    프로퍼티1이름 : 프로퍼티1의값,
    프로퍼티2이름 : 프로퍼티2의값,
    ...
};
var kitty = {
    name: "나비",
    family: "코리안 숏 헤어",
    age: 1,
    weight: 0.1
};
document.write("우리 집 새끼 고양이의 이름은 " + kitty.name + "이고, 종은 " + kitty.family + "입니다.");
```

2. 생성자 함수(Constructor function)를 이용한 방법
new 연산자를 사용하여 객체를 생성하고 초기화할 수 있다.
이때 사용되는 메소드를 생성자(constructor)라고 하며, 이 메소드는 새롭게 생성되는 객체를 초기화하는 역할을 한다. 자바스크릡트는 원시 타입을 위한 생성자를 미리 정의하여 제공한다.
```javascript
var day = new Date(); // new 연산자를 사용하여 date 타입의 객체 생성
document.write("올해는 " + day.getFullYear() + "년입니다.");
```
위 예제처럼 자바스크립트에서 제공하는 생성자를 사용할 수도 있으며, 사용자가 직접 객체 생성자 함수를 작성하여 사용할 수도 있다.

3. Object.create() 메소드를 이용한 방법
Object.create() 메소드를 이용하여 객체를 생성할 수 있다. 이 메소드는 지정된 프로토타입(prototype) 객체와 프로퍼티를 가지고 새로운 객체를 만들어 준다. 따라서 이 메소드를 사용하면 사용자가 프로토타입 객체를 직접 명시할 수 있으므로, 상당히 유용하게 사용 된다. 


## 기본 용어
- 이벤트 리스너(이벤트 핸들러) : 이벤트가 발생했을 대 그 처리를 담당하는 함수를 가리킨다.