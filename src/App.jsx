import "./App.css";
import Content from "./Content";

function App() {
  return (
    <>
      <div>
        <h1>Lorem Ipsum REACT</h1>

        <div className="container">
          <div>
            <Content
              name="Lorem"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur quidem laboriosam vero aut aperiam! Sequi nisi omnis iste. Saepe dolor assumenda, ratione consequatur exercitationem optio adipisci reiciendis impedit aperiam!"
            />
          </div>
          <div>
            <Content
              name="Lorem"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur quidem laboriosam vero aut aperiam! Sequi nisi omnis iste. Saepe dolor assumenda, ratione consequatur exercitationem optio adipisci reiciendis impedit aperiam!"
            />
            <Content
              name="Ipsum"
              text="Cras sollicitudin, velit vitae vehicula laoreet, lorem sem auctor libero, nec dictum mauris justo at nisl. Nam fermentum vitae eros in sollicitudin. Aliquam sit amet nisi fermentum, elementum nisi eu, pellentesque orci. Vestibulum hendrerit nunc ut suscipit dictum. Nullam faucibus ultrices nisi, non luctus lectus scelerisque quis. Mauris nec ligula orci. Vivamus vulputate elit ac augue rhoncus, pulvinar interdum dui tincidunt. Sed molestie, nisl ut faucibus pretium, orci tellus semper risus, at accumsan sapien urna ac nunc. Praesent pellentesque lacinia odio nec facilisis. Vestibulum erat arcu, consequat eu accumsan at, elementum vitae velit. Phasellus porta congue enim, vel aliquam velit ultrices et. Praesent porta felis enim, eu laoreet urna congue pretium. Vestibulum nec fermentum ligula. Ut non sapien ac est consectetur lobortis. Sed rutrum nisl dui, nec pharetra risus laoreet ut. Aenean lobortis magna lacus, quis molestie metus rutrum sed."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
