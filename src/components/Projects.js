import React from "react";
import Nav from "./Nav"
import Header from "./Header"

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec posuere nisl. Cras at posuere quam. Morbi in gravida orci. Quisque eget justo ut lectus condimentum convallis. Duis ut sodales arcu. Etiam tempor, nibh ut viverra volutpat, orci nisl viverra libero, vitae ultricies lacus nisi et tortor. Integer aliquam metus lectus, eu tempor tortor lacinia ut. Phasellus porttitor mattis ipsum in pulvinar. Vivamus sodales dui et augue tincidunt malesuada. Vivamus vitae eleifend neque. Sed tempus, eros ut viverra pharetra, lorem elit egestas ante, aliquam ultricies nisl leo a felis. In id tellus sapien. Proin eget sapien eget enim imperdiet gravida et at augue. Nunc euismod condimentum porta. \
Aenean semper quis turpis in scelerisque. Aenean purus massa, aliquet non maximus feugiat, gravida eu magna. Etiam id neque sed quam aliquam fermentum et id nisl. Vivamus laoreet, augue at hendrerit venenatis, erat ipsum dignissim ligula, ut accumsan elit risus eget tortor. Aenean volutpat, ante in semper facilisis, eros urna blandit libero, et suscipit mi lacus ac nisl. Cras id erat eros. Donec vitae viverra orci. Suspendisse efficitur magna sed urna egestas feugiat. Proin gravida non elit eu ultrices. Aenean aliquet nisl non eros dapibus consequat ac rutrum sem. Fusce tempus ex eros, vel varius nisi eleifend a. \
Cras tincidunt a arcu sit amet viverra. Vestibulum nec sagittis leo. Vivamus nec ex sed est placerat tincidunt id eu tortor. Proin sit amet ante felis. Donec est sem, convallis et metus pharetra, varius tristique ligula. Quisque porttitor, quam at rhoncus tempor, urna mi mollis eros, id molestie purus urna ac magna. Phasellus imperdiet malesuada massa, hendrerit varius orci tincidunt ut. Morbi tincidunt nisi sit amet tellus laoreet, ac rhoncus neque interdum. Phasellus vitae odio molestie, blandit turpis a, volutpat eros. Sed eu libero nec orci pulvinar tincidunt a in ipsum. Suspendisse elit erat, eleifend quis porttitor et, gravida vitae nisi. \
Proin ac pretium dolor. Proin commodo vestibulum felis, sed dignissim nunc pulvinar sed. Ut vel risus lacinia, porttitor diam quis, facilisis augue. Vivamus venenatis, nisl at tempus vestibulum, tortor sapien sollicitudin dolor, a volutpat tortor mi ac enim. Donec quis nulla ut tellus viverra molestie. Aenean imperdiet imperdiet ipsum ut ornare. Donec urna nulla, scelerisque sed ipsum a, congue consequat velit. Mauris tincidunt sagittis urna, et egestas nisi molestie vitae. Mauris congue felis ac turpis semper pulvinar. Duis rhoncus et enim accumsan convallis. Donec ullamcorper pulvinar enim, vitae posuere odio malesuada et. Duis cursus lacinia leo, id posuere ipsum fringilla ut. Curabitur maximus euismod sem a auctor. Nam id justo ut felis mattis ornare eget sollicitudin urna. Sed non dolor ac velit suscipit interdum ut eget sem. Phasellus quis efficitur felis, ac sollicitudin leo. \
Nulla accumsan convallis dui, sit amet aliquam ligula consectetur nec. Phasellus semper rutrum nisl a imperdiet. Nam interdum maximus dui, et lacinia tortor varius vel. Maecenas vulputate nec turpis vitae pellentesque. Sed blandit enim quis varius pellentesque. Donec sodales elit non tristique tincidunt. Donec facilisis urna lectus, sit amet finibus risus consectetur eget. Nulla sit amet laoreet sapien, nec facilisis felis. Etiam vulputate odio volutpat nunc facilisis fringilla. Ut at placerat tellus. Praesent faucibus nisl ante, in pellentesque quam vulputate volutpat. Aenean tincidunt, diam non ullamcorper blandit, tortor odio pulvinar diam, nec facilisis elit ex eu sem. "



const Projects = () => (
    <div>
        <Header Title = "Projects"/>
        <Nav />
        <div className="content">
            <p>{text}</p>
        </div>
    </div>
)

export default Projects;