// DOM Elements
const audio = document.getElementById("audio");
const sentenceElement = document.getElementById("sentence");
const translationElement = document.getElementById("translation");
const playButton = document.getElementById("play-button");
const progressBar = document.getElementById("progress-bar");
const elapsedTime = document.getElementById("elapsed-time");
const totalDuration = document.getElementById("total-duration");
const seekBar = document.getElementById("seekBar");
const subtitleImage = document.getElementById("subtitle-image");
const memoryId = document.body.getAttribute('data-memory'); // Get memory ID
const numberOfSquares = 10;

console.log("Memory ID:", memoryId);

// Subtitles Data
const subtitlesData = {
 
    "1": [
        { time: 0, sentence: "Als ich klein war,", translation: "When I was little,"},
        { time: 1.5, sentence: "gab es im Büro meiner Eltern", translation: "There was in my parents' office"},
        { time: 3.5, sentence: "eine Wand Regal voller Bücher.", translation: "a wall of shelves full of books."},
        { time: 5, sentence: "In den untersten Reihen", translation: "On the bottom rows"},
        { time: 7, sentence: "waren Kinderbücher für uns bereitgestellt.", translation: "children's books were provided for us."},
        { time: 9, sentence: "Ich war damals regelrecht besessen", translation: "At that time, I was truly obsessed" },
        { time: 10, sentence: "von Märchenbüchern", translation: "with fairy tale books" },
        { time: 12, sentence: "und zog diese mit Vorliebe aus dem Regal.", translation: "and loved pulling them off the shelf." },
        { time: 14, sentence: "Eins dieser Bücher", translation: "One of these books"},
        { time: 16, sentence: "hielt ich mit voller Überzeugung", translation: "I was fully convinced"},
        { time: 18, sentence: "für magisch.", translation: "was magical."},
        { time: 19, sentence: "Jedes Mal, wenn ich es zurück", translation: "Every time I put it back"},
        { time: 20, sentence: "ins Regal stellte", translation: "on the shelf"},
        { time: 21, sentence: "und am nächsten Tag wieder danach griff,", translation: "and picked it up again the next day,"},
        { time: 24, sentence: "war es ein neues Märchen.", translation: "it was a new fairy tale."},
        { time: 26, sentence: "Dieser Wechsel setzte sich so lange fort,", translation: "This change continued for so long,"},
        { time: 29, sentence: "bis die Geschichten schließlich rotierten.", translation: "until the stories eventually started rotating."},
        { time: 32, sentence: "Erst später stellte sich heraus,", translation: "It was only later that it turned out,"},
        { time: 34, sentence: "dass meine Mutter die Bücher", translation: "that my mother"},
        { time: 35, sentence: "heimlich austauschte", translation: "secretly swapped the books"},
        { time: 37, sentence: "und sich dabei köstlich amüsierte.", translation: "and had great fun doing it."},
        { time: 39, sentence: "Während ich fest davon überzeugt war,", translation: "While I was firmly convinced"},
        { time: 41, sentence: "dass ich ein wahrhaft magisches", translation: "that I was holding a truly magical"},
        { time: 42.5, sentence: "Buch in Händen hielt.", translation: "book in my hands."},
    ],
    

"2": [
    { time: 0, sentence: "Pandaiva mwana mudiki,", translation: "When I was a little girl,",  image: "tanaka1.jpg" },
    { time: 2, sentence: "ndaiva mutimhu yemagymnastics", translation: "I was in the nation gymnastics team"},
    { time: 4, sentence: "yenyika yeZimbabwe.", translation: "for Zimbabwe." },
    { time: 6, sentence: "Nguva yemakwikwi nedzimwe nyika", translation: "The time of competition with other countries" },
    { time: 8, sentence: "yaindinzwisa mudumbu chaizvo,", translation: "it really made me nervous," },
    { time: 10, sentence: "asi zvainakidza pose", translation: "But I really enjoyed them" },
    { time: 12, sentence: "pandaitamba zvakanaka ", translation: "when I played well" },
    { time: 14, sentence: "ndichikunda vamwe.", translation: "and beat others." },
    { time: 16, sentence: "Mumwe wemakwikwi wandisingakanganwe", translation: "One of my most memorable competitions" , image: "tanaka2.jpg"},
    { time: 18, sentence: "wakaitirwa munyika yeNamibia", translation: "was held in Namibia"},
    { time: 20, sentence: " pandaiva nemakore gumi nerimwe.", translation: "when I was eleven years old." },
    { time: 23, sentence: "Zvaityisa nekuti vandaikwikwidzana", translation: "It was scary because my competitors" },
    { time: 27, sentence: "navo vekunedzimwe nyika vagonesesa.", translation: "from other countries were very tough." },
    { time: 31, sentence: "Zvisinei hazvo,", translation: "However," },
    { time: 33, sentence: "ndakanakidzwa nenguva yandakafamba", translation: "I enjoyed my time traveling" },
    { time: 35, sentence: "kuenda kunyika yeNamibia.", translation: "to Namibia." },
    { time: 37, sentence: "Ndinoyeuka nguva", translation: "I remember that moment"},
    { time: 39, sentence: "iyioyo nemefaro mumoyo mangu.", translation: "with joy in my heart."},
],

    "3": [
        { time: 0, sentence: "초등학교 6학년 때,", translation: "When I was in the 6th grade of elementary school,"},
        { time: 3, sentence: "한국에 온 지 반년쯤 되었던 나는", translation: "I had been in Korea for about half a year,"},
        { time: 7, sentence: "롤리팝이라는 핑크색 휴대폰을 들고 다녔어.", translation: "and I carried around a pink cell phone called Lollipop."},
        { time: 11, sentence: "그런데 어느 날, 갑자기 휴대폰이 정지되었다는", translation: "But one day, I suddenly heard a notification"},
        { time: 14, sentence: "안내를 들었지.", translation: "that my cell phone had been suspended."},
        { time: 16, sentence: "알고 보니, 인터넷 접속 버튼인‘네이트 버튼’을", translation: "It turns out, the internet access button, the ‘Nate button’,", image: "thea1.jpg" },
        { time: 19, sentence: "실수로 눌러,몇 달간 만화를 본 탓에,", translation: "was accidentally pressed, and because I watched cartoons for several months,", image: "thea2.jpg"  },
        { time: 23, sentence: "요금이 200만 원이나 나온 거야.", translation: "the bill came out to 2 million won." },
        { time: 25, sentence: "이 버튼은 누르기만 해도", translation: "This button, just by pressing it,"},
        { time: 28, sentence: "인터넷 요금이 폭등하는 위험한 버튼이었는데,", translation: "would cause the internet bill to skyrocket, was a dangerous button,"},
        { time: 31, sentence: "그걸 모르고 계속 썼던 거지.", translation: "but without knowing that, I kept using it."},
        { time: 34, sentence: "더 웃긴 건, 이 기술을 개발한 사람이", translation: "The funniest part is, the person who developed this technology"},
        { time: 36, sentence: "바로 우리 아빠였다는 거야!", translation: "was actually my dad!"},
        { time: 40, sentence: "결국 돈을 직접 갚으라는", translation: "In the end, when my dad told me to pay back the money myself,"},
        { time: 43, sentence: "아빠의 말에 명절 세뱃돈을 모으고,", translation: "I saved up my New Year’s money, collected my holiday allowances,"},
        { time: 45, sentence: "집안일을 하며 2년 동안 열심히 갚았어.", translation: "did chores around the house, and worked hard for two years to pay it back."},
        { time: 48, sentence: "그 사건은나를 철들게 하고", translation: "That incident made me mature"},
        { time: 51, sentence: "돈의 가치를 깨닫게 해준 잊을 수 없는 경험이었어.", translation: "and helped me realize the value of money. It was an unforgettable experience."},
    ],

    "4": [
        { time: 0, sentence: "સુન્દય સવાર નો નાસ્તો, સુન્દય સવાર નું રોઉતીને.", translation: "Sunday morning breakfast routine."},
        { time: 6, sentence: "હું પાંચ વરસ ની હોઇ,", translation: "I must have been 5 years old,"},
        { time: 9, sentence: "હું હાર સુન્દય સવારે દાદા સાથે ગાંઠિયા લેવા જતી થી.", translation: "every Sunday morning I used to go to buy gathiya with my grandfather.", image: "saachi1.jpg" },
        { time: 13, sentence: "એ ઊકલે ની દુકાન મારા ઘરે થી પાંચ મિનિટે દૂર હતી,", translation: "It was a five minute walk from my house and on the walk,"},
        { time: 17, sentence: "અને જતા જતા દાદા મને કહાની કેટ થા.", translation: "my grandfather would tell me stories."},
        { time: 21, sentence: "હવે મને એ સ્ટોરીએસ યાદ નથી એટલી બરાબર થી,", translation: "I don't remember what those stories were about anymore," },
        { time: 26, sentence: "પાર મને યાદ છે કી મને એ સ્ટોરીએસ બવ ગમતી થી.", translation: "but I remember enjoying them and looking forward to them." },
        { time: 30, sentence: "અમે એ ઊકલે ની દુકાન હાજી પણ યાદ છે.", translation: "I remember the Uncle's shop." },
        { time: 36, sentence: "હું એમના કાઉન્ટર સુધી પોહોચી નોતી શક્તિ,", translation: "I was tiny and I couldn't reach the counter,"},
        { time: 39, sentence: "પાર મને ગાંઠિયા અને જલેબી ના સુગંધ આવતી થી.", translation: "but I remember the distinct smell of jalebi and fafda."},
        { time: 42, sentence: "એન્ડ એ ઊકલે હાર ટીમે મને મારુ પોતાનું પડીકું આપતા.", translation: "The uncle always gave me my own little packet of bhavnagri gathiya."},
        { time: 47, sentence: "એ મને હંમેશા ભાવનગરી ગાથી આપતા,", translation: "They always gave me Bhavnagari gathiya,"},
        { time: 50, sentence: "અને મને બવ ગમતું કેમકે એ મારો પોતાનો નાશ્તો હતો.", translation: "and I liked it because it was my own breakfast."},
        { time: 54, sentence: "ઘર પોહોચી ને મમી દાળ", translation: "After reaching home, Mom would have dal,", image: "saachi2.jpg" },
        { time: 58, sentence: "દાદા અને દાદી એમનું જલેબી ગાંઠિયા અને ચા ખાતા થા,", translation: "grandfather and grandmother would have their jalebi, gathiya, and tea,"},
        { time: 62, sentence: "અને હું", translation: "and I"},
        { time: 70, sentence: "મારા ભાવનગરી ગાંઠિયા એન્ડ ચા અને બિસ્કિટ ખાતી थी.", translation: "would have my Bhavnagari gathiya, tea, and biscuits."},
        { time: 74, sentence: "હાર સુન્દય સવારે અમે એજ બ્રેકફાસ્ટ કરતા થા,", translation: "Every Sunday morning, we would have the same breakfast."},
        { time: 80, sentence: "અને એ મારુ ફવોયુરીતે ટીમે હતો.", translation: "It's one of the most special memories I have of my childhood."},
    ],

    "5": [
        { time: 0, sentence: "Мне было лет пять, может, четыре.", translation: "I was about five, maybe four."},
        { time: 5, sentence: "Моя лучшая подруга в детском саду,", translation: "My best friend in kindergarten,", image: "tonia1.jpg"},
        { time: 7, sentence: "Кристина, подарила мне браслет.", translation: "Kristina, gave me a bracelet."},
        { time: 10, sentence: "Господи, как же мне нравился тот браслет.", translation: "God, how I loved that bracelet."},
        { time: 13, sentence: "Он был простой, но такой красивый—", translation: "It was simple, but so beautiful—"},
        { time: 16, sentence: "просто пластмассовый бриллиант на веревке.", translation: "just a plastic diamond on a string.", image: "tonia2.jpg" },
        { time: 19, sentence: "Однажды, спустя некоторое время,", translation: "One day, after some time," },
        { time: 21, sentence: "одна популярная девочка в нашем классе", translation: "one popular girl in our class" },
        { time: 24, sentence: "(я помню, что ее звали Саша)", translation: "(I remember her name was Sasha)"},
        { time: 26, sentence: "заметила мой браслет и предложила обмен.", translation: "noticed my bracelet and offered to exchange it."},
        { time: 29, sentence: "Она сказала, что у нее тоже есть", translation: "She said that she also had"},
        { time: 33, sentence: "красивый камешек, но в форме сердца.", translation: "a beautiful stone, but in the shape of a heart."},
        { time: 35, sentence: "Я ее боялась и согласилась на обмен,", translation: "I was afraid of her and agreed to the exchange,"},
        { time: 37, sentence: "не понимая, на что я соглашалась.", translation: "not understanding what I was agreeing to."},
        { time: 40, sentence: "В итоге, она просто сняла со своей футболки", translation: "In the end, she simply took off from her t-shirt"},
        { time: 42, sentence: "маленькую наклейку-стразу и дала ее мне.", translation: "a small rhinestone sticker and gave it to me."},
        { time: 46, sentence: "Почему-то, в тот момент,", translation: "For some reason, at that moment,"},
        { time: 48, sentence: "я ничего не могла ответить,", translation: "I couldn’t say anything,"},
        { time: 50, sentence: "и у меня не нашлось отваги", translation: "and I didn't have the courage"},
        { time: 52, sentence: "попросить свой браслет обратно.", translation: "to ask for my bracelet back."},
        { time: 54, sentence: "Я до сих пор об этом жалею.", translation: "I still regret it."},
    ],

    "6": [
        { time: 0, sentence: "Mis primos Juan y Rocío", translation: "My cousins ​​Juan and Rocio"},
        { time: 1.5, sentence: "vivían con mis tíos en Arizona, San Luis,", translation: "lived with my uncles in Arizona, San Luis,"},
        { time: 4, sentence: "a unos 800km de la ciudad de Buenos Aires,", translation: "about 800km from the city of Buenos Aires,"},
        { time: 7, sentence: "donde vivía mi familia. ", translation: "where my family lived."},
        { time: 8.5, sentence: "De chiquitos, cuando venían a visitarnos,", translation: "When we were little, when they came to visit us," },
        { time: 11, sentence: "mis papas solían organizar salidas", translation: "my parents used to organize trips" },
        { time: 13, sentence: "al shopping mall", translation: "to the shopping mall" },
        { time: 14, sentence: "e íbamos todos juntos en un solo auto.", translation: "and we would all go together in one car.",  image: "flor1.jpg"  },
        { time: 17, sentence: "No se por qué,", translation: "I don’t know why,"},
        { time: 18.5, sentence: "no creo que haya una razón exactamente,", translation: "I don’t think there is an exact reason,"},
        { time: 21, sentence: "pero de alguna manera", translation: "but somehow"},
        { time: 22.5, sentence: "hacíamos entrar 8 personas en un auto.", translation: "we would fit 8 people in one car."},
        { time: 26, sentence: "Le decíamos el auto de los payasos,", translation: "We called it the clown car,"},
        { time: 28, sentence: "una vez que estacionábamos,", translation: "once we parked,"},
        { time: 30, sentence: "empezaban a salir niños y adultos", translation: "children and adults would start getting out"},
        { time: 32.5, sentence: "por las 4 puertas", translation: "through the 4 doors"},
        { time: 33.5, sentence: "y el baúl del auto también.", translation: "and the trunk of the car as well."},
        { time: 36, sentence: "Recuerdo como peleábamos con mi hermanita", translation: "I remember how we would fight with my little sister"},
        { time: 38, sentence: "y mis primos para ver quienes", translation: "and my cousins ​​to see who"},
        { time: 40, sentence: "iban a viajar en el baúl!", translation: "would travel in the trunk!"},
        { time: 41.5, sentence: "El lugar más incomodo, más oscuro, pequeño,", translation: "The most uncomfortable, darkest, smallest,"},
        { time: 45, sentence: "y más peligroso, era el más codiciado", translation: "and most dangerous place was the most coveted"},
        { time: 47, sentence: "por los niños!", translation: "by the children!"},
        { time: 49, sentence: "Creo que gracias a la terapia inversiva", translation: "I think that thanks to the immersive therapy"},
        { time: 51, sentence: "del auto de los payasos", translation: "of the clown car"},
        { time: 52.5, sentence: "ninguno de nosotros salió claustrofóbico…", translation: "none of us became claustrophobic…"},
    ],
    
   
    "7": [
        { time: 0, sentence: "在我的老家会有骑着三轮车的人", translation: "In my hometown, there are people on tricycles",  image: "jo2.jpg"},
        { time: 4.5, sentence: "在夜里卖馄饨。", translation: "selling wontons at night."},
        { time: 7, sentence: "他们会一边骑车一边敲竹杠", translation: "They would ride their bikes and extort money,"},
        { time: 10, sentence: "提醒附近的人，他们正在卖馄饨。", translation: "alerting people nearby that they were selling wontons.",},
        { time: 14.5, sentence: "我总是很喜欢吃那种馄饨", translation: "I always loved eating those wontons,", image: "jo1.jpg" },
        { time: 17.5, sentence: "然后我爸爸会从窗口探出头叫住卖馄饨的人", translation: "Then my dad would lean out of the window and call the wonton seller," },
        { time: 22, sentence: "“诶，馄饨，这里要一碗馄饨。”", translation: "Hey, wontons, I want a bowl of wontons here." },
        { time: 26, sentence: "然后那个车子会停在我们家楼下", translation: "Then the car would stop downstairs of our house" },
        { time: 29, sentence: "给我做一碗馄饨。", translation: "and make me a bowl of wontons.", image: "jo3.jpg"},
        { time: 31, sentence: "我会看着他从头到尾做馄饨的全过程。", translation: "I would watch him make the wontons from start to finish."},
    ],


"8": [
    { time: 0, sentence: "Odkąd pamiętam mama zawsze podcinała,", translation: "For as long as I can remember, Mom always trimmed "},
    { time: 4.5, sentence: "goliła włosy tacie. ", translation: "and shaved Dad's hair. "},
    { time: 6, sentence: "Brała golarkę, stawiała krzesło w salonie", translation: "She’d take the razor, set up a chair in the living room"},
    { time: 10, sentence: "i robiła go na jeżyka.", translation: "and give him a buzz cut."},
    { time: 13, sentence: "Tata zawsze żartował,", translation: "Dad always joked around,"},
    { time: 15, sentence: "udawał przy mnie, że go boli,", translation: "pretending it hurt," },
    { time: 17, sentence: "a potem mówił, że wygląda jak komandos.", translation: "and then said he looked like a commando."},
    { time: 20, sentence: "Nazwał to strzyżenie na komandosa.", translation: "He called that haircut the commando cut." },
    { time: 25, sentence: "Szukając ostatnio jakiegoś zdjęcia", translation: "Recently, while searching for a photo,"},
    { time: 29, sentence: "z dzieciństwa znalazłam Taty portret,", translation: "I found a portrait of Dad", image: "emilia2.jpg"},
    { time: 31, sentence: "który zrobiłam jak byłam mała. ", translation: " that I made when I was little."},
    { time: 30, sentence: "Nie pamięta jak go robiłam,", translation: "He doesn't remember how I made it,"},
    { time: 36, sentence: "ale sądząc po jego włosach było to właśnie", translation: "but judging by his hair it was exactly that"},
    { time: 40, sentence: "po jego strzyżeniu na komandosa", translation: "after his commando haircut"},
    { time: 44, sentence: "gdyż przykleiłam jego prawdziwe włosy.", translation: "because I glued his real hair on."},
    { time: 47.5, sentence: "Teraz jak o tym myślę,", translation: "Now that I think about it,"},
    { time: 51, sentence: "to właściwie te chwile wygłupiania się,", translation: "it's actually those moments of fooling around,"},
    { time: 54.5, sentence: "robienia min wpłynęły na moje własne", translation: "making faces influenced my own"},
    { time: 57, sentence: "poczucie humoru", translation: "sense of humor."},
    { time: 59, sentence: "i jak wykorzystuje humor", translation: "and how I use humor"},
    { time: 61, sentence: "w moich ilustracjach i animacjach.", translation: "in my illustrations and animations."},
    { time: 65, sentence: "Ostatnio nawet znajoma rodziców powiedziała,", translation: "Recently even a friend of my parents said,"},
    { time: 69, sentence: "że widzi mojej sztuce mojego tatę,", translation: "that he sees my father in my art,", image: "emilia1.jpg"},
    { time: 72, sentence: "jego poczucie humoru.", translation: "his sense of humor."},
    { time: 75, sentence: "Jak widać mój portret z dzieciństwa potwierdza,", translation: "As you can see, my childhood portrait confirms,"},
    { time: 77, sentence: "że jest moją inspiracje.", translation: "that he is my inspiration."},
    { time: 79.5, sentence: "Do dzisiaj się wygłupiamy,", translation: "We still fool around to this day,"},
    { time: 81.5, sentence: "a zabawa stała się nie zbędna w mojej praktyce.", translation: "and play has become indispensable in my practice."},
],

"9": [
    { time: 0, sentence: "Eu sou filha única", translation: "I am an only child"},
    { time: 2.5, sentence: "eu sempre quis ter", translation: "and I always wanted to have"},
    { time: 4, sentence: "um irmão ou uma irmã.", translation: "a brother or a sister."},
    { time: 5.5, sentence: "Eu pedi muito para os meus pais", translation: "I asked my parents a lot"},
    { time: 7, sentence: "para ter irmãos,", translation: "to have siblings,"},
    { time: 10, sentence: "E aí, depois de um tempo,", translation: "And then, after some time,"},
    { time: 12, sentence: "vendo que eu não ia conseguir", translation: "seeing that I wouldn't get it"},
    { time: 14, sentence: "eu passei a pedir um cachorrinho.", translation: "I started to aks for a puppy."},
    { time: 16.5, sentence: "Só que minha mãe tinha pavor", translation: "But my mother was terrified" },
    { time: 18.5, sentence: "de animais domésticos", translation: "of pets" },
    { time: 20, sentence: "e ela que mandava em casa… ou seja,", translation: "and she was the one in charge at home... in other words," },
    { time: 22, sentence: "eu nunca ia conseguir!", translation: "I was never going to get one!"},
    { time: 24, sentence: "Mas eu sou muito persistente", translation: "But I am very persistent"},
    { time: 26, sentence: "e eu passei a ficar obcecada pelo ", translation: "and I became obsessed with"},
    { time: 28, sentence: "assunto cachorro por conta disso.", translation: "the subject of dogs because of that."},
    { time: 30.5, sentence: "Eu estudei várias as raças,", translation: "I studied several breeds,"},
    { time: 32, sentence: "sabia as características,", translation: "I knew their characteristics,"},
    { time: 33.5, sentence: "os prós e contras,", translation: "pros and cons,"},
    { time: 35, sentence: "comprava revistas sobre cachorro.", translation: "I bought magazines about dogs."},
    { time: 37, sentence: "Eu ficava louca quando", translation: "I went crazy when"},
    { time: 38.5, sentence: "via um cachorro na rua.", translation: "I saw a dog on the street."},
    { time: 40, sentence: "E eu segui essa estratégia", translation: "And I followed this strategy"},
    { time: 41, sentence: "por uns dois anos,", translation: "for about two years,"},
    { time: 42, sentence: "até chegar no ponto de eu ter", translation: "until I got to the point of making up"},
    { time: 44, sentence: "um cachorro imaginário em casa!", translation: "an imaginary dog at home."},
    { time: 47, sentence: "Eu não sei como", translation: "I don't know how"},
    { time: 48.5, sentence: "consegui convencer os meus pais,", translation: "I managed to convince my parents,"},
    { time: 50, sentence: "mas um dia minha mãe falou: tá bom.", translation: "but one day my mother said:"},
    { time: 52, sentence: "Vamos atrás desse cachorro.", translation: "OK. Let's go get this dog.", image: "babi1.jpg"},
    { time: 55, sentence: "Foi um dos dias mais felizes", translation: "It was one of the happiest days", image: "babi4.jpg"},
    { time: 56.5, sentence: "que eu já vivi!", translation: "days of my life!", image: "babi4.jpg"},
    { time: 58, sentence: "E eu tinha 12 anos.", translation: "And I was 12 years old."},
],

"10": [
    { time: 0, sentence: "Bibong bibo ako na batang estudyante,", translation: "I was a shy, talkative young student." },
    { time: 4, sentence: "At sa marami, mabuti ito na katangian.", translation: "And to many, this was a good quality.", image: "clara1.jpg" },
    { time: 7.5, sentence: "Ngunit nung lumipat ako ng", translation: "But when I moved" },
    { time: 9, sentence: "eskwelahan pang high school,", translation: "high school," },
    { time: 11, sentence: "tinignan ako bilang banta at inisaan", translation: "I was looked at as a threat" },
    { time: 13, sentence: "ako ng mga bago kong kaklase.", translation: "and left alone." },
    { time: 16, sentence: "Naasar daw sila sa akin.", translation: "They said they were pissed at me." },
    { time: 19.5, sentence: "Hangga’t nakarating sa teacher advisor", translation: "Until it was brought up to the teacher advisor." },
    { time: 21.5, sentence: "Namin at naisip ng teacher", translation: "We and the teacher came up with the idea." },
    { time: 23.4, sentence: "Magpasa ng papel na hinati pahaba", translation: "Pass a paper divided into lengthwise sections." },
    { time: 26, sentence: "Isang side para isulat ng mga kaklase.", translation: "One side was for my classmates to write." },
    { time: 30, sentence: "Kung anong gusto nila tungkol sakin,", translation: "What they liked about me," },
    { time: 32, sentence: "At sa kabila anong ayaw nila.", translation: "And on the other side, what they didn’t like." },
    { time: 35, sentence: "Pinasa itong papel sa buong klase,", translation: "The paper was passed around the class." },
    { time: 37, sentence: "Habang ako’y pinalabas ng klasrum,", translation: "While I was sent out of the classroom." },
    { time: 40, sentence: "Nakatayo, naghihintay.", translation: "Standing and waiting." },
    { time: 43, sentence: "Pagkatapos ay binasa ng teacher", translation: "Afterward, the teacher read aloud." },
    { time: 45, sentence: "Yung mga nakasulat sa papel.", translation: "What was written on the paper." },
    { time: 48, sentence: "Naaalala ko pa yung itsura nung papeles –", translation: "I still remember how the paper looked –" },
    { time: 51, sentence: "Yung isang side, onti, yung kabila, puno.", translation: "One side had little written on it, while the other side was full." },
    { time: 57, sentence: "Para sa isang doce años,", translation: "For a twelve-year-old," },
    { time: 59, sentence: "Traumatizing siya.", translation: "It was traumatizing." },
    { time: 61, sentence: "Kahit na nais kong kalimutan,", translation: "Even though I want to forget it," },
    { time: 64, sentence: "Nagiwan ito ng malaki na tuldok sa buhay ko.", translation: "It left a significant mark on my life." },
    { time: 68, sentence: "Iniisip ko nalang na sa kahit anumang grupo,", translation: "I just think that in any group," },
    { time: 71, sentence: "Wala dapat isang nainiiwan.", translation: "No one should ever be left out." }
]



};   

// showing images in homepage // 
document.querySelectorAll('.hover-image').forEach((sup) => {
    // Show the image on hover
    sup.addEventListener('mouseenter', (e) => {
      const imageUrl = sup.getAttribute('data-image'); // Get the image URL from the data attribute
      const preview = document.getElementById('image-preview');
      preview.style.backgroundImage = `url(${imageUrl})`;
      preview.style.top = `${e.pageY + 15}px`; // Position slightly below the cursor
      preview.style.left = `${e.pageX + 15}px`; // Position slightly to the right of the cursor
      preview.style.display = 'block'; // Show the preview
    });
  
    // Hide the image on mouse leave
    sup.addEventListener('mouseleave', () => {
      const preview = document.getElementById('image-preview');
      preview.style.display = 'none'; // Hide the preview
    });
  
    // Update position dynamically while hovering
    sup.addEventListener('mousemove', (e) => {
      const preview = document.getElementById('image-preview');
      preview.style.top = `${e.pageY + 15}px`; // Follow the cursor vertically
      preview.style.left = `${e.pageX + 15}px`; // Follow the cursor horizontally
    });
  });

// colophon // 
document.addEventListener('DOMContentLoaded', () => {
    // Select colophon and info-box elements
    const colophon = document.querySelector('.colophon');
    const infoBox = document.getElementById('info-box');
    const closeBox = document.getElementById('close-box');
  
    // Ensure the elements exist before adding event listeners
    if (colophon && infoBox && closeBox) {
      // Toggle visibility of the info-box on colophon click
      colophon.addEventListener('click', () => {
        console.log('Colophon clicked!'); // Debugging
        if (infoBox.style.display === 'block') {
          infoBox.style.display = 'none';
        } else {
          infoBox.style.display = 'block';
        }
      });
  
      // Close the info-box on close-box click
      closeBox.addEventListener('click', () => {
        console.log('Close button clicked!'); // Debugging
        infoBox.style.display = 'none';
      });
    } else {
      console.error('One or more elements are missing: colophon, info-box, close-box');
    }
  });

  

  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 480) { // Check for phone view
        const titles = document.querySelectorAll('.title-container, .title, .title2'); // Select elements
        titles.forEach(title => {
            title.innerHTML = title.innerHTML.replace(/&nbsp;/g, ' '); // Replace &nbsp; with regular space
        });
    }
});


// Load Subtitles for the Current Memory
const subtitles = subtitlesData[memoryId];

if (subtitles) {
    loadSubtitles(subtitles);
    audio.addEventListener("timeupdate", () => syncSubtitles(audio, subtitles));
} else {
    console.error(`No subtitles found for memory ID: ${memoryId}`);
}


function loadSubtitles(subtitles) {
    sentenceElement.textContent = subtitles[0]?.sentence || "";
    translationElement.textContent = subtitles[0]?.translation || "";
}

/**
 * Sync subtitles and images with the audio
 */
function syncSubtitles(audio, subtitles) {
    const currentTime = audio.currentTime;

    // Find the current subtitle
    const currentSubtitle = subtitles.find((subtitle, index) => {
        const nextSubtitle = subtitles[index + 1];
        return currentTime >= subtitle.time && (!nextSubtitle || currentTime < nextSubtitle.time);
    });

    if (currentSubtitle) {
        // Update the text
        sentenceElement.textContent = currentSubtitle.sentence || "";
        translationElement.textContent = currentSubtitle.translation || "";

        // Handle image display
        if (currentSubtitle.image) {
            const existingImage = document.querySelector(`img[src="${currentSubtitle.image}"]`);
            if (!existingImage) {
                // Add new image to the container
                const newImage = document.createElement("img");
                newImage.src = currentSubtitle.image;
                newImage.alt = "Subtitle Image";
                newImage.style.display = "block"; // Make the image visible
                document.getElementById("subtitle-images-container").appendChild(newImage);
            }
        }
    } else {
        sentenceElement.textContent = "";
        translationElement.textContent = "";
    }
}



// Ensure all images remain visible until the end of the audio
audio.addEventListener("ended", () => {
    // Clear images and subtitles when the audio ends
    const imageContainer = document.getElementById("subtitle-images-container");
    imageContainer.innerHTML = ""; // Remove all images
    sentenceElement.textContent = "";
    translationElement.textContent = "";

    // Reset play button
    playButton.textContent = "▶";
    progressBar.style.width = "0%"; // Reset progress bar
    elapsedTime.textContent = "0:00"; // Reset elapsed time
    seekBar.value = 0;
});

/**
 * Format time into MM:SS
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Event Listeners

// Update total duration when metadata is loaded
audio.addEventListener("loadedmetadata", () => {
    totalDuration.textContent = formatTime(audio.duration);
    seekBar.max = Math.floor(audio.duration);
});

// Update progress bar, elapsed time, and subtitles
audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        elapsedTime.textContent = formatTime(audio.currentTime);
        seekBar.value = audio.currentTime;
    }
});

// Sync seek bar with user input
seekBar.addEventListener("input", (event) => {
    const seekTime = parseFloat(event.target.value);
    audio.currentTime = seekTime;
});

// Play/Pause functionality
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸"; // Change icon to pause
    } else {
        audio.pause();
        playButton.textContent = "▶"; // Change icon to play
    }
});

audio.addEventListener("ended", () => {
    playButton.textContent = "▶"; // Reset play button icon
    progressBar.style.width = "0%"; // Reset progress bar
    elapsedTime.textContent = "0:00"; // Reset elapsed time
    seekBar.value = 0;

    // Set the last subtitle and image
    const lastSubtitle = subtitles[subtitles.length - 1]; // Get the last subtitle
    sentenceElement.textContent = lastSubtitle.sentence || ""; // Set last sentence
    translationElement.textContent = lastSubtitle.translation || ""; // Set last translation

    if (lastSubtitle.image) {
        subtitleImage.src = lastSubtitle.image;
        subtitleImage.style.display = "block";
    } else {
        subtitleImage.style.display = "none";
    }
});


/**
 * Toggle transcript visibility
 */
function showTranscript(id) {
    const content = document.getElementById(`transcript-${id}`);
    if (content) {
        content.classList.toggle("active");
    }
}