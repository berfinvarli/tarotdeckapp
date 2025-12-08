import TheFool from '../assets/images/0_Fool.png';
import WheelOfFortune from '../assets/images/10_WheelOfFortune.png';
import Justice from '../assets/images/11_Justice.png';
import TheHangedMan from '../assets/images/12_HangedMan.png';
import Death from '../assets/images/13_Death.png';
import Temperance from '../assets/images/14_Temperance.png';
import TheDevil from '../assets/images/15_Devil.png';
import TheTower from '../assets/images/16_Tower.png';
import TheStar from '../assets/images/17_Star.png';
import TheMoon from '../assets/images/18_Moon.png';
import TheSun from '../assets/images/19_Sun.png';
import TheMagician from '../assets/images/1_Magician.png';
import Judgement from '../assets/images/20_Judgement.png';
import TheWorld from '../assets/images/21_World.png';
import TheHighPriestess from '../assets/images/2_HighPriestess.png';
import TheEmpress from '../assets/images/3_Empress.png';
import TheEmperor from '../assets/images/4_Emperor.png';
import TheHierophant from '../assets/images/5_Hierophant.png';
import TheLovers from '../assets/images/6_Lovers.png';
import TheChariot from '../assets/images/7_Chariot.png';
import Strength from '../assets/images/8_Strength.png';
import TheHermit from '../assets/images/9_Hermit.png';

export const cards = [
  {
    id: 0,
    name: 'The Fool',
    image: TheFool,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'Maybe', tr: 'Belki' },  
    meaning: {
      en: 'This card represents new beginnings and the courage to move into the unknown. A cycle is opening for you, inviting you to step forward with trust. The Fool indicates that destiny supports bold actions at this time. When you release your fear of uncertainty, the path ahead reveals unexpected opportunities. This card brings the reminder that freedom and growth come when you honor your true desires and allow life to unfold naturally before you.',
      tr: 'Bu kart yeni başlangıçları ve bilinmeyene adım atma cesaretini temsil eder. Senin için bir döngü açılıyor ve güvenle ilerlemeni davet ediyor. The Fool, bu dönemde cesur hareketlerinin kader tarafından desteklendiğini gösterir. Belirsizlik korkusunu bıraktığında, önündeki yol beklenmedik fırsatlarla açılır. Bu kart, özgürlük ve büyümenin kendi gerçek arzularını onurlandırdığında ve hayatın doğal akışına izin verdiğinde geldiğini hatırlatır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Fool suggests caution, recklessness, or being held back by fear. You might be rushing into something without fully seeing the consequences. It’s a call to pause and avoid impulsive decisions that could lead to self-sabotage or regret. Reconsider your path and move forward only when you have a grounded sense of direction.',
      tr: 'Ters duruşta, The Fool dikkatsizliği, pervasızlığı veya korkuyla engellenmeyi işaret eder. Sonuçları tam olarak görmeden bir şeye acele ediyor olabilirsin. Kendini sabote etmeye veya pişmanlığa yol açabilecek dürtüsel kararlardan kaçınmak için bir durma çağrısıdır. Yolunu yeniden gözden geçir ve sadece sağlam bir yön duygusuna sahip olduğunda ilerle.'
    },
  },
  {
    id: 1,
    name: 'The Magician',
    image: TheMagician,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents personal power, manifestation, and focused intention. You hold the tools needed to create the outcome you desire. The Magician shows that your thoughts and actions are aligned, giving you the ability to shape your reality. When you take initiative with clarity, life responds quickly. This is a period where your abilities strengthen, and the more you trust your skills, the more your path unfolds with purpose.',
      tr: 'Bu kart kişisel gücü, tezahürü ve odaklanmış niyeti temsil eder. İstediğin sonucu yaratmak için gerekli tüm araçlara sahipsin. The Magician, düşüncelerin ve eylemlerin uyumlu olduğunu ve gerçeğini şekillendirme gücüne sahip olduğunu gösterir. Netlikle harekete geçtiğinde hayat hızlıca karşılık verir. Bu dönem yeteneklerinin güçlendiği bir zaman olup, becerilerine güvendikçe yolun daha anlamlı şekilde açılır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Magician suggests a misuse of power, manipulation, or feeling blocked. You may lack the clarity or willpower to manifest your goals, or you could be trying to force an outcome. It warns against deceit or feeling scattered. Focus on regaining your inner balance and true intention before acting.',
      tr: 'Ters duruşta, The Magician gücün kötüye kullanımını, manipülasyonu veya engellenmiş hissetmeyi işaret eder. Hedeflerini gerçekleştirmek için netlik veya irade eksikliği yaşıyor olabilir ya da bir sonucu zorlamaya çalışıyor olabilirsin. Seni aldatmaya veya dağınık hissetmeye karşı uyarır. Harekete geçmeden önce iç dengeni ve gerçek niyetini yeniden kazanmaya odaklan.'
    },
  },
  {
    id: 2,
    name: 'The High Priestess',
    image: TheHighPriestess,
    answer: { en: 'Maybe', tr: 'Belki' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents intuition, hidden truths, and inner guidance. Not everything is visible on the surface, and clarity comes from within rather than from external information. The High Priestess indicates that answers are forming but not yet ready to be revealed. This is a time to observe, to listen carefully, and to move with patience. When you silence the noise around you, the truth becomes unmistakable.',
      tr: 'Bu kart sezgiyi, gizli gerçekleri ve içsel rehberliği temsil eder. Her şey yüzeyde görüldüğü gibi değildir ve netlik dışarıdan değil içeriden gelir. The High Priestess, cevapların oluştuğunu fakat henüz açığa çıkmaya hazır olmadığını gösterir. Bu dönem gözlem yapma, dikkatle dinleme ve sabırla ilerleme zamanıdır. Çevredeki gürültüyü susturduğunda gerçek açıkça ortaya çıkar.'
    },
    meaning_reversed: {  
      en: 'Reversed, The High Priestess suggests ignoring your inner voice or suppressing your intuition. You may be over-relying on logic and external facts, or hidden information may be causing confusion. The card is a warning to look past surface-level appearances and reconnect with your subconscious wisdom. The truth is within, but you are choosing not to see it.',
      tr: 'Ters duruşta, The High Priestess iç sesini görmezden gelmeyi veya sezgini bastırmayı işaret eder. Mantığa ve dış gerçeklere aşırı güveniyor olabilirsin veya gizli bilgiler kafa karışıklığına neden olabilir. Kart, yüzeydeki görünüşlerin ötesine bakman ve bilinçaltı bilgeliğinle yeniden bağlantı kurman için bir uyarıdır. Gerçek içeride, ancak onu görmemeyi seçiyorsun.'
    },
  },
  {
    id: 3,
    name: 'The Empress',
    image: TheEmpress,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'Maybe', tr: 'Belki' },  
    meaning: {
      en: 'This card represents abundance, harmony, and natural growth. The Empress brings expansion through creativity and emotional nourishment. Your environment supports your development, and life responds positively to your openness. This is a time to express yourself freely and allow your ideas to take root. When you care for your inner world, the outer world becomes richer and more fulfilling.',
      tr: 'Bu kart bolluğu, uyumu ve doğal büyümeyi temsil eder. The Empress yaratıcılık ve duygusal beslenme yoluyla genişleme getirir. Çevren gelişimini destekler ve açıklığın hayattan olumlu karşılık alır. Kendini özgürce ifade ettiğin ve fikirlerine kök salma alanı tanıdığın bir dönemdir. İç dünyana özen gösterdiğinde dış dünya daha zengin ve tatmin edici olur.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Empress suggests stifled creativity, a sense of dependence, or neglect of self-care. You might be feeling barren or lacking abundance. It calls for you to nurture yourself and your creative projects. Look at where you are holding back your natural expression and start prioritizing your well-being.',
      tr: 'Ters duruşta, The Empress boğulmuş yaratıcılığı, bağımlılık hissini veya öz bakımı ihmal etmeyi işaret eder. Kendini verimsiz veya bolluktan yoksun hissediyor olabilirsin. Kendini ve yaratıcı projelerini beslemeni ister. Doğal ifadenin nerede engellendiğine bak ve kendi iyiliğini önceliklendirmeye başla.'
    },
  },
  {
    id: 4,
    name: 'The Emperor',
    image: TheEmperor,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents structure, stability, and leadership. The Emperor guides you toward taking control of your situation through discipline and clear boundaries. Now is the moment to act with authority and confidence. When you define what you want and commit to it, progress becomes inevitable. This card reminds you that strength comes from consistency and from trusting your own direction.',
      tr: 'Bu kart düzeni, istikrarı ve liderliği temsil eder. The Emperor, disiplin ve net sınırlar aracılığıyla durumun üzerinde kontrol kurmana rehberlik eder. Otorite ve özgüvenle hareket etmen gereken bir zamandır. Ne istediğini belirleyip buna bağlı kaldığında ilerleme kaçınılmaz olur. Bu kart, gücün tutarlılıktan ve kendi yönüne güvenmekten geldiğini hatırlatır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Emperor suggests a struggle with authority, a loss of control, or being overly rigid. You might be experiencing a lack of discipline or, conversely, being a tyrant to yourself or others. The card advises you to soften your grip, question the rules, and find a balance between structure and flexibility.',
      tr: 'Ters duruşta, The Emperor otorite ile mücadeleyi, kontrol kaybını veya aşırı katı olmayı işaret eder. Disiplin eksikliği yaşıyor veya tam tersi, kendine ya da başkalarına karşı bir zorba gibi davranıyor olabilirsin. Kart, sıkı tutuşunu gevşetmeni, kuralları sorgulamanı ve yapı ile esneklik arasında bir denge bulmanı tavsiye eder.'
    },
  },
  {
    id: 5,
    name: 'The Hierophant',
    image: TheHierophant,
    answer: { en: 'Maybe', tr: 'Belki' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents wisdom, tradition, and guidance. There is value in learning from established structures and trusted mentors. Listen to advice, but also honor your own inner moral compass as you move forward. A deeper message of this card is the importance of choosing the right path with clarity rather than pressure. It encourages reconnecting with long-term values instead of short-term impulses. The Hierophant also highlights that your situation requires patience, grounded decisions, and a trust in the timing of life. If you seek an answer, it may not yet be fully revealed, but signs and guidance are surrounding you.',
      tr: 'Bu kart bilgeliği, geleneği ve rehberliği temsil eder. Yerleşik sistemlerden ve güvendiğin kişilerden öğrenmek değerlidir. Tavsiyeleri dinle ama ilerlerken kendi içsel pusulana da kulak ver. Bu kartın daha derin mesajı, baskıyla değil bilinçle doğru yolu seçmenin önemidir. Kısa vadeli dürtüler yerine uzun vadeli değerlerle yeniden bağlantı kurmanı ister. The Hierophant aynı zamanda durumunun sabır, sağlam kararlar ve yaşamın zamanlamasına güven gerektirdiğini vurgular. Aradığın yanıt tam olarak görünür olmayabilir fakat etrafında seni yönlendiren güçlü işaretler vardır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Hierophant suggests a break from tradition, a rejection of convention, or a feeling of being restricted by dogma. You may be seeking new ways of thinking outside the established norms. It advises you to trust your own inner teachings and develop your unique spiritual path, rather than blindly following others. You are ready to create your own meaning.',
      tr: 'Ters duruşta, The Hierophant geleneklerden kopmayı, kuralları reddetmeyi veya dogmalar tarafından kısıtlanmış hissetmeyi işaret eder. Yerleşik normların dışında yeni düşünce biçimleri arıyor olabilirsin. Başkalarını körü körüne takip etmek yerine kendi iç öğretilerine güvenmeni ve benzersiz ruhsal yolunu geliştirmeni tavsiye eder. Kendi anlamını yaratmaya hazırsın.'
    },
  },

  {
    id: 6,
    name: 'The Lovers',
    image: TheLovers,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents harmony, connection, and soul-level choices. The Lovers brings together both the heart and the mind, reminding you that true alignment appears when desire and wisdom meet. A meaningful connection or important decision is approaching, and the more honestly you listen to your emotions, the clearer your path becomes. This card signals that unity, clarity, and heartfelt truth will guide the outcome you seek.',
      tr: 'Bu kart uyumu, bağlantıyı ve ruh düzeyindeki seçimleri temsil eder. The Lovers, kalp ile zihni bir araya getirir ve gerçek uyumun, arzu ile bilgelik birleştiğinde ortaya çıktığını hatırlatır. Anlamlı bir bağlantı veya önemli bir karar yaklaşmakta; duygularını dürüstçe dinledikçe yolun daha belirgin hale gelir. Bu kart, aradığın sonucun birlik, netlik ve kalpten gelen bir gerçeklikle şekilleneceğini gösterir.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Lovers suggests disharmony, misalignment of values, or a difficult choice. You may be struggling with internal conflict or a relationship issue. It warns that a decision made now might lead to regret. Take time to clarify your own values before committing to a path or person.',
      tr: 'Ters duruşta, The Lovers uyumsuzluğu, değerlerin çatışmasını veya zor bir seçimi işaret eder. İç çatışma veya ilişki sorunu yaşıyor olabilirsin. Şu anda verilen bir kararın pişmanlığa yol açabileceği konusunda uyarır. Bir yola veya kişiye bağlanmadan önce kendi değerlerini netleştirmek için zaman ayır.'
    },
  },
  {
    id: 7,
    name: 'The Chariot',
    image: TheChariot,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents determination, direction, and triumphant progress. The Chariot urges you to take the reins firmly and move forward with bold confidence. Challenges are not obstacles but tests of will, and victory comes when your focus remains unshaken. This energy shows that disciplined action and emotional control will open the road ahead, carrying you toward success with unstoppable momentum.',
      tr: 'Bu kart kararlılığı, yön bulmayı ve zaferle ilerlemeyi temsil eder. The Chariot, dizginleri sıkıca tutup cesur bir güvenle ilerlemeni ister. Karşına çıkan zorluklar engel değil, iradeni sınayan eşiklerdir. Odaklandığında zafer kaçınılmaz olur. Bu enerji, disiplinli bir hareketin ve duygusal dengeyle ilerlemenin yolunu açarak seni durdurulamaz bir ivmeyle başarıya taşır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Chariot suggests a loss of control, an inability to focus, or being driven by misplaced aggression. You might be feeling stuck or moving forward without a clear direction, wasting energy. The message is to regain your emotional composure and realign your focus before trying to force movement. Slow down and check your map.',
      tr: 'Ters duruşta, The Chariot kontrol kaybını, odaklanma yeteneğinin zayıflamasını veya yanlış yönlendirilmiş bir saldırganlıkla hareket etmeyi işaret eder. Sıkışmış hissediyor olabilir ya da net bir yön olmadan ilerlemeye çalışıp enerji kaybediyor olabilirsin. Mesaj, hareketi zorlamaya çalışmadan önce duygusal dengeni yeniden kazanman ve odağını ayarlamandır. Yavaşla ve haritanı kontrol et.'
    },
  },
  {
    id: 8,
    name: 'Strength',
    image: Strength,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents inner strength, compassion, and calm resilience. Strength reminds you that true power is gentle and steady, not forceful. When you meet challenges with patience and softness, you gain more control than any aggressive action could offer. Trust the quiet courage within you—this is a moment where grace becomes your greatest weapon and self-mastery leads you forward.',
      tr: 'Bu kart içsel gücü, şefkati ve sakin bir dayanıklılığı temsil eder. Strength, gerçek gücün sertlikten değil, yumuşak ve sabırlı bir duruştan geldiğini hatırlatır. Zorluklara sakinlikle yaklaştığında, agresif bir tavırdan çok daha fazla ilerleme kaydedersin. İçindeki sessiz cesarete güven; zarafet bu dönemde en güçlü silahındır ve öz disiplin seni ileri taşır.'
    },
    meaning_reversed: {  
      en: 'Reversed, Strength suggests a lack of self-control, vulnerability, or feeling overwhelmed by a situation. You may be letting fear or anxiety control your actions. The card encourages you to find your inner calm again and confront challenges with courage and composure, not aggression or weakness. Reclaim your gentle, steady power.',
      tr: 'Ters duruşta, Strength öz kontrol eksikliğini, kırılganlığı veya bir durum karşısında bunalmış hissetmeyi işaret eder. Korku veya kaygının eylemlerini kontrol etmesine izin veriyor olabilirsin. Kart, içindeki sakinliği yeniden bulmanı ve zorluklarla saldırganlık veya zayıflıkla değil, cesaret ve soğukkanlılıkla yüzleşmeni teşvik eder. Nazik, istikrarlı gücünü geri kazan.'
    },
  },
  {
    id: 9,
    name: 'The Hermit',
    image: TheHermit,
    answer: { en: 'Maybe', tr: 'Belki' },
    answer_reversed: { en: 'Yes', tr: 'Evet' },  
    meaning: {
      en: 'This card represents introspection, guidance, and wisdom gained through solitude. The Hermit invites you to step away from noise so you can hear the truth forming within you. Answers will not come from others now—they grow quietly in your inner world. As you take time alone, clarity expands, and the next step reveals itself like a lantern lighting a dark path.',
      tr: 'Bu kart içe dönüşü, rehberliği ve yalnızlıkla kazanılan bilgeliği temsil eder. The Hermit, içindeki gerçeği duyman için gürültüden uzaklaşmanı ister. Cevaplar şu anda başkalarından gelmeyecek; kendi iç dünyanda sessizce şekilleniyorlar. Yalnız geçirdiğin her an, netliğinin artmasını sağlar ve bir sonraki adım karanlık yolu aydınlatan bir fener gibi ortaya çıkar.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Hermit suggests isolation, loneliness, or an unwillingness to return to the world. You might be self-isolating or resisting the wisdom that others can share. The message is to integrate the lessons you’ve learned and share your light. It’s time to move out of the darkness and re-engage with the community.',
      tr: 'Ters duruşta, The Hermit izolasyonu, yalnızlığı veya dünyaya dönme isteksizliğini işaret eder. Kendini tecrit ediyor veya başkalarının paylaşabileceği bilgeliğe direniyor olabilirsin. Mesaj, öğrendiğin dersleri bütünleştirmen ve ışığını paylaşmandır. Karanlıktan çıkıp toplulukla yeniden etkileşim kurma zamanıdır.'
    },
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    image: WheelOfFortune,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents destiny, shifting cycles, and openings that change everything. The Wheel of Fortune turns in your favor, bringing moments where life accelerates unexpectedly. What once felt stuck begins to move, and new doors appear exactly when you need them. Stay adaptable—fate is aligning events to support your growth, and every turn brings you closer to a breakthrough.',
      tr: 'Bu kart kaderi, değişen döngüleri ve her şeyi dönüştürebilecek fırsatları temsil eder. Wheel of Fortune senin lehine dönüyor; hayatın beklenmedik şekilde hızlandığı anlar getiriyor. Tıkanmış görünen şeyler akmaya başlar ve tam ihtiyacın olan zamanda yeni kapılar açılır. Esnek kal; kader gelişimini desteklemek için olayları hizalıyor ve her dönüş seni bir sıçrama noktasına yaklaştırıyor.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Wheel of Fortune suggests a change for the worse, bad luck, or feeling stuck outside the flow of life. You may be resisting necessary change or blaming external forces. The card advises you to take responsibility for your current circumstances and find stability through inner effort, rather than waiting for luck to change.',
      tr: 'Ters duruşta, Wheel of Fortune kötüye giden bir değişimi, şanssızlığı veya yaşam akışının dışında kalmış hissetmeyi işaret eder. Gerekli değişime direniyor veya dış güçleri suçluyor olabilirsin. Kart, mevcut koşulların sorumluluğunu almanı ve şansın değişmesini beklemek yerine içsel çabayla istikrar bulmanı tavsiye eder.'
    },
  },
  {
    id: 11,
    name: 'Justice',
    image: Justice,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents truth, accountability, and balanced outcomes. Justice brings clarity where confusion existed and ensures that what is fair will prevail. Your choices now carry weight, and acting with honesty will align your path with favorable results. This is a moment to slow down, evaluate every angle, and make decisions rooted in integrity.',
      tr: 'Bu kart gerçeği, sorumluluğu ve dengeli sonuçları temsil eder. Justice, karışıklığın olduğu yerde netlik getirir ve adil olanın galip gelmesini sağlar. Bu dönemde seçimlerin önemlidir ve dürüstlükle hareket ettiğinde yolun olumlu şekilde ilerler. Yavaşlayıp her açıdan değerlendirme yapman ve kararlarını dürüstlükten güç alarak vermen gereken bir zamandır.'
    },
    meaning_reversed: {  
      en: 'Reversed, Justice suggests unfairness, legal complications, or a lack of accountability. You may be dealing with bias or a skewed judgment. It calls for an honest self-assessment of your role in the situation. Ensure your actions are transparent and ethical to restore balance and fairness.',
      tr: 'Ters duruşta, Justice adaletsizliği, hukuki sorunları veya sorumluluk eksikliğini işaret eder. Önyargı veya çarpıtılmış bir yargıyla karşı karşıya olabilirsin. Durumdaki rolünü dürüstçe değerlendirmen için çağrıda bulunur. Dengeyi ve adaleti yeniden sağlamak için eylemlerinin şeffaf ve etik olduğundan emin ol.'
    },
  },
  {
    id: 12,
    name: 'The Hanged Man',
    image: TheHangedMan,
    answer: { en: 'Maybe', tr: 'Belki' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents pause, surrender, and a shift in perspective. Progress requires willingly stepping back so that a deeper understanding can emerge. The Hanged Man teaches patience—when you release control, life rearranges itself in ways you could not see before. A new viewpoint will soon illuminate what once felt uncertain.',
      tr: 'Bu kart duraksamayı, teslimiyeti ve bakış açısındaki değişimi temsil eder. İlerleme, geri çekilip duruma daha derinden bakmayı gerektirir. The Hanged Man sabrı öğretir; kontrolü bıraktığında hayat daha önce göremediğin bir düzenle yeniden şekillenir. Yakında yeni bir bakış açısı, belirsiz görünen noktaları aydınlatacaktır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Hanged Man suggests procrastination, stagnation, or a refusal to see things differently. You may be sacrificing too much or, conversely, avoiding a necessary sacrifice. It is a warning against feeling paralyzed. The way forward requires a shift in action, not just thought; stop being passive and commit to a change in your behavior.',
      tr: 'Ters duruşta, The Hanged Man ertelemeyi, durgunluğu veya olaylara farklı bakmayı reddetmeyi işaret eder. Ya çok fazla fedakarlık yapıyor ya da tam tersi, gerekli bir fedakarlıktan kaçınıyor olabilirsin. Felç olmuş hissetmeye karşı bir uyarıdır. İlerleme yolu sadece düşünce değil, eylem değişikliği gerektirir; pasif olmayı bırak ve davranışlarında bir değişime kendini ada.'
    },
  },
  {
    id: 13,
    name: 'Death',
    image: Death,
    answer: { en: 'No', tr: 'Hayır' },
    answer_reversed: { en: 'Maybe', tr: 'Belki' },  
    meaning: {
      en: 'This card represents endings, transformation, and powerful renewal. Death does not signal loss, but a deep release of what can no longer grow. Something old must fall away so a new beginning can finally rise. Allow the cycle to close naturally—rebirth always follows, bringing clarity, strength, and a direction that aligns with who you are becoming.',
      tr: 'Bu kart bitişleri, dönüşümü ve güçlü bir yenilenmeyi temsil eder. Death kaybı değil, artık büyümeyen şeylerin derin bir şekilde bırakılmasını simgeler. Yeni başlangıcın yükselebilmesi için eski olanın doğal olarak son bulması gerekir. Bu döngünün kapanmasına izin ver; yeniden doğuş her zaman gelir ve beraberinde netlik, güç ve gerçek benliğinle uyumlu yeni bir yön getirir.'
    },
    meaning_reversed: {  
      en: 'Reversed, Death suggests resistance to change, stagnation, or a drawn-out ending. You may be clinging to old habits or relationships that are long past their time. The card warns that by avoiding the inevitable transformation, you are only prolonging the pain. Release the past and embrace the fresh start awaiting you.',
      tr: 'Ters duruşta, Death değişime direnmeyi, durgunluğu veya uzayan bir sonu işaret eder. Zamanı geçmiş eski alışkanlıklara veya ilişkilere tutunuyor olabilirsin. Kart, kaçınılmaz dönüşümden kaçınarak sadece acıyı uzattığın konusunda uyarır. Geçmişi bırak ve seni bekleyen yeni başlangıcı kucakla.'
    },
  },
  {
    id: 14,
    name: 'Temperance',
    image: Temperance,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents balance, healing, and the blending of opposite forces. Temperance teaches moderation and harmony, guiding you to move with calm confidence. When you slow down and allow energies to mix naturally, the solution you seek emerges with ease. This is a time to trust the flow and stay centered.',
      tr: 'Bu kart dengeyi, iyileşmeyi ve zıt güçlerin uyumlu şekilde birleşmesini temsil eder. Temperance, ölçülülüğü ve uyumu öğreterek sakin bir güvenle ilerlemene rehberlik eder. Yavaşlayıp enerjilerin doğal şekilde kaynaşmasına izin verdiğinde aradığın çözüm kendiliğinden ortaya çıkar. Bu dönem, akışa güvenip merkezde kalma zamanıdır.'
    },
    meaning_reversed: {  
      en: 'Reversed, Temperance suggests imbalance, discord, or going to extremes. You may be struggling with excess or a lack of self-control, leading to inner friction. The message is to restore harmony by finding your center and moderating your behavior. Reassess what you are mixing and strive for internal peace.',
      tr: 'Ters duruşta, Temperance dengesizliği, uyumsuzluğu veya aşırılıklara gitmeyi işaret eder. Aşırıya kaçmakla veya öz kontrol eksikliğiyle mücadele ediyor, bu da içsel sürtüşmeye yol açıyor olabilirsin. Mesaj, merkezini bularak ve davranışlarını dengeleyerek uyumu yeniden sağlamaktır. Neleri birleştirdiğini yeniden değerlendir ve iç huzur için çabala.'
    },
  },
  {
    id: 15,
    name: 'The Devil',
    image: TheDevil,
    answer: { en: 'No', tr: 'Hayır' },
    answer_reversed: { en: 'Maybe', tr: 'Belki' },  
    meaning: {
      en: 'This card represents restriction, temptation, and patterns that limit your growth. The Devil reveals the chains you may not realize you’re carrying—fear, attachment, or cycles that drain your energy. Awareness breaks these illusions. When you face your shadow honestly, the grip weakens and freedom begins.',
      tr: 'Bu kart kısıtlamaları, baştan çıkarmayı ve gelişimini sınırlayan döngüleri temsil eder. The Devil, farkında olmadan taşıyor olabileceğin zincirleri gösterir—korku, bağımlılık veya enerjini tüketen alışkanlıklar. Bu yanılsamaları kırmanın yolu farkındalıktır. Gölge yönünle dürüstçe yüzleştiğinde tutuş zayıflar ve özgürleşme başlar.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Devil suggests breaking free from bonds, a new awareness of limitations, or a step toward freedom. You are recognizing and confronting the negative patterns or attachments that have held you back. This is a powerful sign of overcoming temptation and regaining control. Keep pushing for liberation.',
      tr: 'Ters duruşta, The Devil bağlardan kurtulmayı, kısıtlamaların yeni farkındalığını veya özgürlüğe doğru bir adımı işaret eder. Seni geride tutan olumsuz döngüleri veya bağımlılıkları tanıyor ve onlarla yüzleşiyorsun. Bu, baştan çıkmanın üstesinden gelme ve kontrolü yeniden kazanma konusunda güçlü bir işarettir. Kurtuluş için çabalamaya devam et.'
    },
  },
  {
    id: 16,
    name: 'The Tower',
    image: TheTower,
    answer: { en: 'No', tr: 'Hayır' },
    answer_reversed: { en: 'Maybe', tr: 'Belki' },  
    meaning: {
      en: 'This card represents sudden change, awakening, and the collapse of what is unstable. The Tower shakes foundations that were never truly solid, clearing space for truth. Though the shift may feel intense, it brings liberation from illusions. What falls away now makes room for a stronger, more authentic structure.',
      tr: 'Bu kart ani değişimi, uyanışı ve sağlam olmayan temellerin yıkılmasını temsil eder. The Tower, gerçekte sağlam olmayan yapılara sarsıntı getirir ve gerçeğe yer açar. Bu değişim yoğun hissettirse de yanılsamalardan özgürleşme sağlar. Şu an yıkılan şeyler, daha güçlü ve daha gerçek bir yapı için alan yaratır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Tower suggests a fear of change or a delayed disaster. You may be resisting an inevitable breakdown, or the crisis you need to have is passing you by without impact. It warns that by avoiding the necessary destruction, you are preventing the creation of a better future. Face the change willingly to mitigate the damage.',
      tr: 'Ters duruşta, The Tower değişim korkusunu veya ertelenmiş bir felaketi işaret eder. Kaçınılmaz bir yıkıma direniyor olabilirsin veya yaşaman gereken kriz etkisiz bir şekilde geçip gidiyor olabilir. Kart, gerekli yıkımdan kaçınarak daha iyi bir geleceğin oluşmasını engellediğin konusunda uyarır. Hasarı azaltmak için değişime isteyerek yüzleş.'
    },
  },
  {
    id: 17,
    name: 'The Star',
    image: TheStar,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents hope, divine guidance, and emotional renewal. The Star washes over you with gentle clarity, reminding you that you are supported by unseen forces. Healing is taking place, and your future is opening toward brighter possibilities. Believe in your path—your inner light is guiding you forward.',
      tr: 'Bu kart umudu, ilahi rehberliği ve duygusal yenilenmeyi temsil eder. The Star, üzerine yumuşak bir netlik enerjisi getirir ve görünmeyen güçler tarafından desteklendiğini hatırlatır. İyileşme süreci devam ediyor ve geleceğin daha parlak olasılıklara açılıyor. Yoluna güven; iç ışığın seni ileriye taşıyor.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Star suggests a loss of faith, hopelessness, or feeling discouraged. You may be struggling to believe in the future or feeling disconnected from inspiration. The message is to be patient with yourself and seek out sources of hope and creativity. Healing takes time, but your light is not extinguished—it is merely obscured.',
      tr: 'Ters duruşta, The Star inanç kaybını, umutsuzluğu veya cesaret kırıklığını işaret eder. Geleceğe inanmakta zorlanıyor veya ilhamdan kopmuş hissediyor olabilirsin. Mesaj, kendine karşı sabırlı olman ve umut ile yaratıcılık kaynaklarını arayıp bulmandır. İyileşme zaman alır, ancak ışığın sönmüş değil—sadece gizlenmiş durumda.'
    },
  },
  {
    id: 18,
    name: 'The Moon',
    image: TheMoon,
    answer: { en: 'Maybe', tr: 'Belki' },
    answer_reversed: { en: 'Yes', tr: 'Evet' },  
    meaning: {
      en: 'This card represents intuition, mystery, and navigating through uncertainty. The Moon blurs the edges of reality, urging you to rely on your deeper senses rather than surface appearances. Not everything is clear yet, but your emotions carry important truths. Move gently, trust your instincts, and allow the unseen to guide you.',
      tr: 'Bu kart sezgiyi, gizemi ve belirsizlik içinde ilerlemeyi temsil eder. The Moon, gerçekliğin sınırlarını bulanıklaştırır ve yüzeyde görünenlere değil, daha derin duyularına güvenmeni ister. Her şey henüz net değil, ancak duyguların önemli gerçekleri taşır. Nazikçe ilerle, sezgilerine güven ve görünmeyenin rehberliğine izin ver.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Moon suggests hidden truths are beginning to surface, or a period of fear and confusion is lifting. The fog is clearing, and deception or misunderstandings are being revealed. It encourages you to trust your instincts now, as the path ahead is finally becoming clear enough to proceed with confidence.',
      tr: 'Ters duruşta, The Moon gizli gerçeklerin yüzeye çıkmaya başladığını veya korku ve kafa karışıklığı döneminin sona erdiğini işaret eder. Sis dağılıyor ve aldatmacalar veya yanlış anlaşılmalar ortaya çıkıyor. Önündeki yol sonunda güvenle ilerleyebileceğin kadar netleştiği için şimdi içgüdülerine güvenmeni teşvik eder.'
    },
  },
  {
    id: 19,
    name: 'The Sun',
    image: TheSun,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'Maybe', tr: 'Belki' },  
    meaning: {
      en: 'This card represents joy, illumination, and uplifting energy. The Sun clears away doubts and fills your path with clarity and confidence. Success becomes more achievable now, and your inner child is invited to come forward. Celebrate your light—this period radiates positivity and forward momentum.',
      tr: 'Bu kart neşeyi, aydınlanmayı ve yükselten enerjiyi temsil eder. The Sun, şüpheleri dağıtır ve yolunu netlik ve güvenle doldurur. Başarı bu dönemde çok daha ulaşılabilir hale gelir; içindeki çocuğun ortaya çıkmasına izin ver. Işığını kutla; bu dönem pozitiflik ve ilerlemenin enerjisini taşır.'
    },
    meaning_reversed: {  
      en: 'Reversed, The Sun suggests a temporary lack of clarity, minor setbacks, or feeling a need to hide your true self. The joy is still there, but it may be obscured by minor worries or pessimism. Focus on what brings you happiness, and the light will return. The card reminds you that your inner positivity is a choice.',
      tr: 'Ters duruşta, The Sun geçici bir netlik eksikliğini, küçük aksaklıkları veya gerçek benliğini saklama ihtiyacını işaret eder. Neşe hala orada, ancak küçük endişeler veya kötümserlik tarafından gizlenmiş olabilir. Sana mutluluk getiren şeylere odaklan ve ışık geri dönecektir. Kart, içsel pozitifliğinin bir seçim olduğunu hatırlatır.'
    },
  },
  {
    id: 20,
    name: 'Judgement',
    image: Judgement,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'No', tr: 'Hayır' },  
    meaning: {
      en: 'This card represents awakening, rebirth, and evaluating your past with honesty. Judgement signals a moment of clarity where past choices turn into valuable lessons. You are being called to rise into a more authentic version of yourself. Accept what has been, release what no longer serves you, and move forward renewed.',
      tr: 'Bu kart uyanışı, yeniden doğuşu ve geçmişi dürüstçe değerlendirmeyi temsil eder. Judgement, geçmiş seçimlerin değerli derslere dönüştüğü bir netlik anını ifade eder. Kendinin daha gerçek bir hâline yükselmen için bir çağrıdır. Olanları kabul et, artık hizmet etmeyeni bırak ve yenilenmiş bir şekilde ilerle.'
    },
    meaning_reversed: {  
      en: 'Reversed, Judgement suggests self-doubt, reluctance to learn from the past, or an unwillingness to forgive yourself. You may be judging yourself too harshly or avoiding a crucial life lesson. The card calls for radical self-acceptance and the courage to release past guilt so you can move forward with clarity.',
      tr: 'Ters duruşta, Judgement kendini sorgulamayı, geçmişten ders çıkarmaya isteksizliği veya kendini affetmeyi reddetmeyi işaret eder. Kendini çok sert yargılıyor veya önemli bir hayat dersinden kaçınıyor olabilirsin. Kart, köklü öz kabul ve netlikle ilerleyebilmek için geçmişteki suçluluğu serbest bırakma cesaretini istiyor.'
    },
  },
  {
    id: 21,
    name: 'The World',
    image: TheWorld,
    answer: { en: 'Yes', tr: 'Evet' },
    answer_reversed: { en: 'Maybe', tr: 'Belki' },  
    meaning: {
      en: 'This card represents completion, fulfillment, and the mastery of a long cycle. The World brings wholeness—everything comes together with harmony, and a chapter reaches its perfect end. You are stepping into a phase of confidence and understanding. Celebrate the journey that brought you here, for a new beginning is already forming beyond this completion.',
      tr: 'Bu kart tamamlanmayı, bütünlüğü ve uzun bir döngünün ustalığını temsil eder. The World, her şeyin uyumla birleştiği ve bir bölümün kusursuz sona ulaştığı bir bütünlük hissi getirir. Kendini daha bilinçli ve güçlü bir döneme atarken bulursun. Seni buraya getiren yolculuğu kutla; çünkü bu tamamlanmanın ötesinde yeni bir başlangıç çoktan şekilleniyor.'
    },
    meaning_reversed: {  
      en: 'Reversed, The World suggests a feeling of incompleteness, a delay in success, or unfinished business. You may be close to your goal but are struggling to cross the finish line. The card advises you to review what steps you missed and commit to tying up loose ends. The feeling of closure is within reach if you apply the final effort.',
      tr: 'Ters duruşta, The World eksiklik hissini, başarıda bir gecikmeyi veya bitmemiş işleri işaret eder. Hedefine yakın olabilirsin ancak bitiş çizgisini geçmekte zorlanıyorsun. Kart, hangi adımları kaçırdığını gözden geçirmeni ve yarım kalan işleri tamamlamaya odaklanmanı tavsiye eder. Son çabayı gösterirsen, kapanış hissi çok yakındadır.'
    },
  }
];
