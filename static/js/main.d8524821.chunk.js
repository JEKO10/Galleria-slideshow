(this.webpackJsonpgalleria=this.webpackJsonpgalleria||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),r=a(9),n=a.n(r),l=(a(15),a(4)),o=a(5),h=a(2),p=a.p+"static/media/logo.f8bb14c9.svg",c=a(0);var g=function(e){var t=e.slideShow,a=e.setSlideShow;return Object(c.jsxs)("nav",{children:[Object(c.jsx)(o.b,{to:"/",onClick:function(){a(!1)},children:Object(c.jsx)("img",{src:p,alt:"Logo"})}),Object(c.jsx)(o.b,{to:t?"#":"/art/0",onClick:function(){a(!t)},children:Object(c.jsxs)("button",{children:[t?"Stop":"Start"," Slideshow"]})})]})},d=a(10),w=a(6);var m=function(e){var t=e.id,a=e.thumbnail,i=e.name,s=e.artist;return Object(c.jsx)(o.b,{to:"/art/".concat(t),children:Object(c.jsxs)("div",{className:"singleArt",children:[Object(c.jsx)("img",{src:a,alt:i}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("h2",{children:i}),Object(c.jsx)("h3",{children:s.name})]})]})})};var u=function(){return Object(c.jsx)("section",{className:"gallery",children:w.map((function(e){return Object(c.jsx)(m,Object(d.a)({},e),e.id)}))})};var b=function(){return Object(c.jsxs)("section",{className:"error",children:[Object(c.jsx)("h1",{children:"No Art Here!"}),Object(c.jsx)(o.b,{to:"/",children:"Back Home"})]})};var j=function(e){var t=e.slideShow,a=e.setFade,s=Object(h.g)().id;s>14&&(s=0),s<0&&(s=14);var r=w[s],n=r.name,l=r.artist,o=Object(h.f)(),p="7.142857142857143"*s;return Object(i.useEffect)((function(){if(t){var e=setTimeout((function(){o("/art/".concat(+s+1))}),4e3);return function(){return clearTimeout(e)}}}),[t,s,o]),Object(c.jsxs)("section",{className:"slideShow",children:[Object(c.jsx)("div",{className:"line",children:Object(c.jsx)("div",{style:{content:"",position:"absolute",background:"#000",height:"100%",width:p+"%"}})}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[" ",n]}),Object(c.jsx)("p",{children:l.name})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){o("/art/".concat(+s-1)),a("left")},children:Object(c.jsx)("svg",{width:"26",height:"24",viewBox:"0 0 26 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{stroke:"#000000",fill:"none",fillRule:"evenodd",children:[Object(c.jsx)("path",{d:"M24.166 1.843L3.627 12.113l20.539 10.269V1.843z",strokeWidth:"2px",stroke:"#000000",fill:"none"}),Object(c.jsx)("path",{fill:"#D8D8D8",d:"M.986.5h-1v22.775h1z",stroke:"#000000"})]})})}),Object(c.jsx)("button",{onClick:function(){o("/art/".concat(+s+1)),a("right")},children:Object(c.jsx)("svg",{width:"26",height:"24",viewBox:"0 0 26 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{stroke:"#000000",fill:"none",fillRule:"evenodd",children:[Object(c.jsx)("path",{d:"M1.528 1.843l20.538 10.27L1.528 22.382V1.843z",strokeWidth:"2px",stroke:"#000000",fill:"none"}),Object(c.jsx)("path",{fill:"#D8D8D8",d:"M24.708.5h1v22.775h-1z",stroke:"#000000"})]})})})]})]})]})};var f=function(e){var t=e.slideShow,a=e.setSlideShow,s=Object(h.g)().id;s>14&&(s=0),s<0&&(s=14);var r=w[s],n=r.year,o=r.large,p=r.gallery,g=r.name,d=r.artist,m=r.description,u=r.source,b=Object(i.useState)(!1),f=Object(l.a)(b,2),v=f[0],y=f[1],x=Object(i.useState)(""),k=Object(l.a)(x,2),O=k[0],S=k[1];return document.body.style.position=v?"fixed":"static",Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:v?"large":"large hide",onClick:function(){y(!1)},children:[Object(c.jsx)("button",{onClick:function(){y(!1)},children:"CLOSE"}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:p,alt:g})})]}),Object(c.jsxs)("section",{className:"artPage",children:[Object(c.jsxs)("div",{className:"left"===O?"picture left":"right"===O?"picture right":"picture",children:[Object(c.jsxs)("figure",{children:[Object(c.jsx)("img",{src:o,alt:g,id:"art"}),Object(c.jsxs)("button",{onClick:function(){y(!0)},children:[Object(c.jsx)("svg",{xlink:"http://www.w3.org/1999/xlink",width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("g",{fill:"#FFFFFF",fillRule:"nonzero",children:Object(c.jsx)("path",{d:"M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z",fill:"#FFFFFF"})})}),"VIEW IMAGE"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"name",children:[Object(c.jsx)("h1",{children:g}),Object(c.jsx)("h2",{children:d.name})]}),Object(c.jsx)("img",{src:d.image,alt:d.name,id:"artist"})]})]}),Object(c.jsxs)("div",{className:"left"===O?"artInfo left":"right"===O?"artInfo right":"artInfo",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)("p",{children:m}),Object(c.jsx)("a",{href:u,target:"__blank",children:"Go to Source"})]})]},s),Object(c.jsx)(j,{slideShow:t,setSlideShow:a,setFade:S})]})};var v=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(g,{slideShow:a,setSlideShow:s}),Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{exact:!0,path:"/",element:Object(c.jsx)(u,{})}),Object(c.jsx)(h.a,{path:"/art/:id",element:Object(c.jsx)(f,{slideShow:a,setSlideShow:s})}),Object(c.jsx)(h.a,{path:"*",element:Object(c.jsx)(b,{})})]})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),r(e),n(e)}))};n.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),y()},6:function(e){e.exports=JSON.parse('[{"id":0,"name":"Starry Night","year":1889,"description":"Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. \\"Through the iron-barred window,\\" he wrote to his brother, Theo, around 23 May 1889, \\"I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.\\"","source":"https://en.wikipedia.org/wiki/The_Starry_Night","artist":{"image":"https://galleria-slideshow.vercel.app/assets/starry-night/artist.jpg","name":"Vincent Van Gogh"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/starry-night/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/starry-night/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/starry-night/gallery.jpg"},{"id":1,"name":"The Great Wave off Kanagawa","year":1831,"description":"The Great Wave off Kanagawa (Japanese: \u795e\u5948\u5ddd\u6c96\u6d6a\u88cf, Hepburn: Kanagawa-oki Nami Ura, lit. \\"Under the Wave off Kanagawa\\"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.","source":"https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/artist.jpg","name":"Hokusai"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/gallery.jpg"},{"id":2,"name":"Penitent Magdalene","year":1625,"description":"Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting\'s first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.","source":"https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/artist.jpg","name":"Artemisia Gentileschi"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/gallery.jpg"},{"id":3,"name":"Guernica","year":1937,"description":"The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.","source":"https://en.wikipedia.org/wiki/Guernica_(Picasso)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/guernica/artist.jpg","name":"Pablo Picasso"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/guernica/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/guernica/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/guernica/gallery.jpg"},{"id":4,"name":"The Boy in the Red Vest","year":1889,"description":"C\xe9zanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Z\xfcrich, Switzerland. The other three portraits, of different poses, are in museums in the US","source":"https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/artist.jpg","name":"Paul C\xe9zanne"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/gallery.jpg"},{"id":5,"name":"Arnolfini Portrait","year":1434,"description":"It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich \\"in its own way it was as new and revolutionary as Donatello\'s or Masaccio\'s work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term\\".","source":"https://en.wikipedia.org/wiki/Arnolfini_Portrait","artist":{"image":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/artist.jpg","name":"Jan van Eyck"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/gallery.jpg"},{"id":6,"name":"The Sleeping Gypsy","year":1897,"description":"The Sleeping Gypsy (French: La Boh\xe9mienne endormie) is an 1897 oil painting by French Na\xefve artist Henri Rousseau (1844\u20131910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Ind\xe9pendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.","source":"https://en.wikipedia.org/wiki/The_Sleeping_Gypsy","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/artist.jpg","name":"Henri Rousseau"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/gallery.jpg"},{"id":7,"name":"The Night Caf\xe9","year":1888,"description":"The Night Caf\xe9 (French: Le Caf\xe9 de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Caf\xe9 de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh\'s and Gauguin\'s Arl\xe9sienne; a bit later, Joseph Ginoux evidently posed for both artists, too.","source":"https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/artist.jpg","name":"Vincent Van Gogh"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/gallery.jpg"},{"id":8,"name":"The Storm on the Sea of Galilee","year":1633,"description":"The painting, in vertical format, shows a close-up view of Christ\'s disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.","source":"https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/artist.jpg","name":"Rembrandt"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/gallery.jpg"},{"id":9,"name":"Girl with a Pearl Earring","year":1665,"description":"The painting is a tronie, the Dutch 17th-century description of a \'head\' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.","source":"https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring","artist":{"image":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/artist.jpg","name":"Johannes Vermeer"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/gallery.jpg"},{"id":10,"name":"The Swing","year":1767,"description":"The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.","source":"https://en.wikipedia.org/wiki/The_Swing_(Fragonard)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-swing/artist.jpg","name":"Jean-Honor\xe9 Fragonard"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-swing/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-swing/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-swing/gallery.jpg"},{"id":11,"name":"Lady with an Ermine","year":1489,"description":"The Lady with an Ermine (Italian: Dama con l\'ermellino [\u02c8da\u02d0ma kon lermel\u02c8li\u02d0no]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c.\u20091489\u20131491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza (\\"Il Moro\\"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de\' Benci, La Belle Ferronni\xe8re and the Mona Lisa","source":"https://en.wikipedia.org/wiki/Lady_with_an_Ermine","artist":{"image":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/artist.jpg","name":"Leonardo da Vinci"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/gallery.jpg"},{"id":12,"name":"The Basket of Apples","year":1893,"description":"The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul C\xe9zanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.","source":"https://en.wikipedia.org/wiki/The_Basket_of_Apples","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/artist.jpg","name":"Paul C\xe9zanne"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/gallery.jpg"},{"id":13,"name":"Van Gogh \\nself-portrait","year":1889,"description":"This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was \\"absolutely fanatical\\". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.","source":"https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/artist.jpg","name":"Vincent Van Gogh"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/gallery.jpg"},{"id":14,"name":"Mona Lisa","year":1503,"description":"The Mona Lisa (/\u02ccmo\u028an\u0259 \u02c8li\u02d0s\u0259/; italian: La Gioconda [la d\u0292o\u02c8konda] or Monna Lisa [\u02c8m\u0254nna \u02c8li\u02d0za]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \\"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\\". The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.","source":"https://en.wikipedia.org/wiki/Mona_Lisa","artist":{"image":"https://galleria-slideshow.vercel.app/assets/mona-lisa/artist.jpg","name":"Leonardo da Vinci"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/mona-lisa/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/mona-lisa/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/mona-lisa/gallery.jpg"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.d8524821.chunk.js.map