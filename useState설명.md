# useState 훅

## 1. useState 이란?

    화면 갱신을 위해 React 내부에서 관리하는 변수(값)

## 2. useState 사용법

    const [number, setNumber] = useState(0)

    // 위의 소스 코드를 아래와 같이 변경하여,
    // React가 해당 변수(number)를 관리

    //////////////////////////////////////

    let number = 0;

    function setNumber(num){
       number = num
    }
