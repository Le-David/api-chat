class apiChat {
  constructor() {
    fetch("https://czechichat.herokuapp.com/api/list-messages")
      .then((response) => response.json())
      .then((data) => console.log(data))

    this.getName()
  }

  getName = () => {
    let setName = this.getLocalStorageName()

    while (setName == null || setName == "") {
      setName = prompt("Please enter your name/nickname.")
    }

    this.setName(setName)

    return getLocalStorageName()
  }

  setName = (name) => {
    localStorage.setItem("name", name)
  }

  getLocalStorageName = () => localStorage.getItem("name")
}

new apiChat()
