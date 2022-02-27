(this.webpackJsonpgalleria=this.webpackJsonpgalleria||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var i=t(1),s=t.n(i),r=t(9),n=t.n(r),l=(t(15),t(4)),o=t(2),h=t.p+"static/media/logo.f8bb14c9.svg",p=t(0);var g=function(){return Object(p.jsxs)("nav",{children:[Object(p.jsx)(l.b,{to:"/",children:Object(p.jsx)("img",{src:h,alt:"Logo"})}),Object(p.jsx)("button",{children:"Start Slideshow"})]})},c=t(10),d=t(6);var m=function(e){var a=e.id,t=e.thumbnail,i=e.name,s=e.artist;return Object(p.jsx)(l.b,{to:"/art/".concat(a),children:Object(p.jsxs)("div",{className:"singleArt",children:[Object(p.jsx)("img",{src:t,alt:i}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("h2",{children:i}),Object(p.jsx)("h3",{children:s.name})]})]})})};var w=function(){return Object(p.jsx)("section",{className:"gallery",children:d.map((function(e){return Object(p.jsx)(m,Object(c.a)({},e),e.id)}))})};var u=function(){return Object(p.jsxs)("section",{className:"error",children:[Object(p.jsx)("h1",{children:"No Art Here!"}),Object(p.jsx)(l.b,{to:"/",children:"Back Home"})]})},b=t(5);var f=function(){var e=Object(o.g)().id,a=d[e],t=a.year,s=a.large,r=a.gallery,n=a.name,l=a.artist,h=a.description,g=a.source,c=Object(i.useState)(!1),m=Object(b.a)(c,2),w=m[0],u=m[1],f=Object(o.f)();return console.log(f),document.body.style.position=w?"fixed":"static",Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:w?"large":"large hide",onClick:function(){u(!1)},children:[Object(p.jsx)("button",{onClick:function(){u(!1)},children:"CLOSE"}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:r,alt:n})})]}),Object(p.jsxs)("section",{className:"artPage",children:[Object(p.jsxs)("div",{className:"picture",children:[Object(p.jsxs)("figure",{children:[Object(p.jsx)("img",{src:s,alt:n,id:"art"}),Object(p.jsxs)("button",{onClick:function(){u(!0)},children:[Object(p.jsx)("svg",{xlink:"http://www.w3.org/1999/xlink",width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("g",{fill:"#FFFFFF",fillRule:"nonzero",children:Object(p.jsx)("path",{d:"M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z",fill:"#FFFFFF"})})}),"VIEW IMAGE"]})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"name",children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("h2",{children:l.name})]}),Object(p.jsx)("img",{src:l.image,alt:l.name,id:"artist"})]})]}),Object(p.jsxs)("div",{className:"artInfo",children:[Object(p.jsx)("h1",{children:t}),Object(p.jsx)("p",{children:h}),Object(p.jsx)("a",{href:g,target:"__blank",children:"Go to Source"})]})]})]})};var j=function(){var e=Object(o.g)().id;return console.log(e),Object(p.jsx)("div",{children:"Slideshow"})};var y=function(){return Object(p.jsxs)(l.a,{children:[Object(p.jsx)(g,{}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",element:Object(p.jsx)(w,{})}),Object(p.jsx)(o.a,{path:"/art/:id",element:Object(p.jsx)(f,{})}),Object(p.jsx)(o.a,{path:"/slideshow/:id",element:Object(p.jsx)(j,{})}),Object(p.jsx)(o.a,{path:"/Galleria-slideshow/*",element:Object(p.jsx)(u,{})})]})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,i=a.getFID,s=a.getFCP,r=a.getLCP,n=a.getTTFB;t(e),i(e),s(e),r(e),n(e)}))};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),v()},6:function(e){e.exports=JSON.parse('[{"id":0,"name":"Starry Night","year":1889,"description":"Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. \\"Through the iron-barred window,\\" he wrote to his brother, Theo, around 23 May 1889, \\"I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.\\"","source":"https://en.wikipedia.org/wiki/The_Starry_Night","artist":{"image":"https://galleria-slideshow.vercel.app/assets/starry-night/artist.jpg","name":"Vincent Van Gogh"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/starry-night/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/starry-night/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/starry-night/gallery.jpg"},{"id":1,"name":"The Great Wave off Kanagawa","year":1831,"description":"The Great Wave off Kanagawa (Japanese: \u795e\u5948\u5ddd\u6c96\u6d6a\u88cf, Hepburn: Kanagawa-oki Nami Ura, lit. \\"Under the Wave off Kanagawa\\"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.","source":"https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/artist.jpg","name":"Hokusai"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-great-wave-off-kanagawa/gallery.jpg"},{"id":2,"name":"Penitent Magdalene","year":1625,"description":"Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting\'s first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.","source":"https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/artist.jpg","name":"Artemisia Gentileschi"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/penitent-magdalene/gallery.jpg"},{"id":3,"name":"Guernica","year":1937,"description":"The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.","source":"https://en.wikipedia.org/wiki/Guernica_(Picasso)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/guernica/artist.jpg","name":"Pablo Picasso"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/guernica/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/guernica/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/guernica/gallery.jpg"},{"id":4,"name":"The Boy in the Red Vest","year":1889,"description":"C\xe9zanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Z\xfcrich, Switzerland. The other three portraits, of different poses, are in museums in the US","source":"https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/artist.jpg","name":"Paul C\xe9zanne"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-boy-in-the-red-vest/gallery.jpg"},{"id":5,"name":"Arnolfini Portrait","year":1434,"description":"It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich \\"in its own way it was as new and revolutionary as Donatello\'s or Masaccio\'s work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term\\".","source":"https://en.wikipedia.org/wiki/Arnolfini_Portrait","artist":{"image":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/artist.jpg","name":"Jan van Eyck"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/arnolfini-portrait/gallery.jpg"},{"id":6,"name":"The Sleeping Gypsy","year":1897,"description":"The Sleeping Gypsy (French: La Boh\xe9mienne endormie) is an 1897 oil painting by French Na\xefve artist Henri Rousseau (1844\u20131910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Ind\xe9pendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.","source":"https://en.wikipedia.org/wiki/The_Sleeping_Gypsy","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/artist.jpg","name":"Henri Rousseau"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-sleeping-gypsy/gallery.jpg"},{"id":7,"name":"The Night Caf\xe9","year":1888,"description":"The Night Caf\xe9 (French: Le Caf\xe9 de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Caf\xe9 de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh\'s and Gauguin\'s Arl\xe9sienne; a bit later, Joseph Ginoux evidently posed for both artists, too.","source":"https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/artist.jpg","name":"Vincent Van Gogh"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-night-cafe/gallery.jpg"},{"id":8,"name":"The Storm on the Sea of Galilee","year":1633,"description":"The painting, in vertical format, shows a close-up view of Christ\'s disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.","source":"https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/artist.jpg","name":"Rembrandt"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-storm-on-the-sea-of-galilee/gallery.jpg"},{"id":9,"name":"Girl with a Pearl Earring","year":1665,"description":"The painting is a tronie, the Dutch 17th-century description of a \'head\' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.","source":"https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring","artist":{"image":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/artist.jpg","name":"Johannes Vermeer"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/girl-with-pearl-earring/gallery.jpg"},{"id":10,"name":"The Swing","year":1767,"description":"The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.","source":"https://en.wikipedia.org/wiki/The_Swing_(Fragonard)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-swing/artist.jpg","name":"Jean-Honor\xe9 Fragonard"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-swing/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-swing/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-swing/gallery.jpg"},{"id":11,"name":"Lady with an Ermine","year":1489,"description":"The Lady with an Ermine (Italian: Dama con l\'ermellino [\u02c8da\u02d0ma kon lermel\u02c8li\u02d0no]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c.\u20091489\u20131491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza (\\"Il Moro\\"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de\' Benci, La Belle Ferronni\xe8re and the Mona Lisa","source":"https://en.wikipedia.org/wiki/Lady_with_an_Ermine","artist":{"image":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/artist.jpg","name":"Leonardo da Vinci"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/lady-with-an-ermine/gallery.jpg"},{"id":12,"name":"The Basket of Apples","year":1893,"description":"The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul C\xe9zanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.","source":"https://en.wikipedia.org/wiki/The_Basket_of_Apples","artist":{"image":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/artist.jpg","name":"Paul C\xe9zanne"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/the-basket-of-apples/gallery.jpg"},{"id":13,"name":"Van Gogh \\nself-portrait","year":1889,"description":"This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was \\"absolutely fanatical\\". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.","source":"https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)","artist":{"image":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/artist.jpg","name":"Vincent Van Gogh"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/van-gogh-self-portrait/gallery.jpg"},{"id":14,"name":"Mona Lisa","year":1503,"description":"The Mona Lisa (/\u02ccmo\u028an\u0259 \u02c8li\u02d0s\u0259/; italian: La Gioconda [la d\u0292o\u02c8konda] or Monna Lisa [\u02c8m\u0254nna \u02c8li\u02d0za]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \\"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\\". The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.","source":"https://en.wikipedia.org/wiki/Mona_Lisa","artist":{"image":"https://galleria-slideshow.vercel.app/assets/mona-lisa/artist.jpg","name":"Leonardo da Vinci"},"thumbnail":"https://galleria-slideshow.vercel.app/assets/mona-lisa/thumbnail.jpg","large":"https://galleria-slideshow.vercel.app/assets/mona-lisa/hero-large.jpg","gallery":"https://galleria-slideshow.vercel.app/assets/mona-lisa/gallery.jpg"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.ba3713c8.chunk.js.map