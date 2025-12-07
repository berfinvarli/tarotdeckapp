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
    meaning: {
      en: 'This card represents new beginnings and the courage to move into the unknown. A cycle is opening for you, inviting you to step forward with trust. The Fool indicates that destiny supports bold actions at this time. When you release your fear of uncertainty, the path ahead reveals unexpected opportunities. This card brings the reminder that freedom and growth come when you honor your true desires and allow life to unfold naturally before you.',
      tr: 'Bu kart yeni başlangıçları ve bilinmeyene adım atma cesaretini temsil eder. Senin için bir döngü açılıyor ve güvenle ilerlemeni davet ediyor. The Fool, bu dönemde cesur hareketlerinin kader tarafından desteklendiğini gösterir. Belirsizlik korkusunu bıraktığında, önündeki yol beklenmedik fırsatlarla açılır. Bu kart, özgürlük ve büyümenin kendi gerçek arzularını onurlandırdığında ve hayatın doğal akışına izin verdiğinde geldiğini hatırlatır.'
    }
  },
  {
    id: 1,
    name: 'The Magician',
    image: TheMagician,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents personal power, manifestation, and focused intention. You hold the tools needed to create the outcome you desire. The Magician shows that your thoughts and actions are aligned, giving you the ability to shape your reality. When you take initiative with clarity, life responds quickly. This is a period where your abilities strengthen, and the more you trust your skills, the more your path unfolds with purpose.',
      tr: 'Bu kart kişisel gücü, tezahürü ve odaklanmış niyeti temsil eder. İstediğin sonucu yaratmak için gerekli tüm araçlara sahipsin. The Magician, düşüncelerin ve eylemlerin uyumlu olduğunu ve gerçeğini şekillendirme gücüne sahip olduğunu gösterir. Netlikle harekete geçtiğinde hayat hızlıca karşılık verir. Bu dönem yeteneklerinin güçlendiği bir zaman olup, becerilerine güvendikçe yolun daha anlamlı şekilde açılır.'
    }
  },
  {
    id: 2,
    name: 'The High Priestess',
    image: TheHighPriestess,
    answer: { en: 'Maybe', tr: 'Belki' },
    meaning: {
      en: 'This card represents intuition, hidden truths, and inner guidance. Not everything is visible on the surface, and clarity comes from within rather than from external information. The High Priestess indicates that answers are forming but not yet ready to be revealed. This is a time to observe, to listen carefully, and to move with patience. When you silence the noise around you, the truth becomes unmistakable.',
      tr: 'Bu kart sezgiyi, gizli gerçekleri ve içsel rehberliği temsil eder. Her şey yüzeyde görüldüğü gibi değildir ve netlik dışarıdan değil içeriden gelir. The High Priestess, cevapların oluştuğunu fakat henüz açığa çıkmaya hazır olmadığını gösterir. Bu dönem gözlem yapma, dikkatle dinleme ve sabırla ilerleme zamanıdır. Çevredeki gürültüyü susturduğunda gerçek açıkça ortaya çıkar.'
    }
  },
  {
    id: 3,
    name: 'The Empress',
    image: TheEmpress,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents abundance, harmony, and natural growth. The Empress brings expansion through creativity and emotional nourishment. Your environment supports your development, and life responds positively to your openness. This is a time to express yourself freely and allow your ideas to take root. When you care for your inner world, the outer world becomes richer and more fulfilling.',
      tr: 'Bu kart bolluğu, uyumu ve doğal büyümeyi temsil eder. The Empress yaratıcılık ve duygusal beslenme yoluyla genişleme getirir. Çevren gelişimini destekler ve açıklığın hayattan olumlu karşılık alır. Kendini özgürce ifade ettiğin ve fikirlerine kök salma alanı tanıdığın bir dönemdir. İç dünyana özen gösterdiğinde dış dünya daha zengin ve tatmin edici olur.'
    }
  },
  {
    id: 4,
    name: 'The Emperor',
    image: TheEmperor,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents structure, stability, and leadership. The Emperor guides you toward taking control of your situation through discipline and clear boundaries. Now is the moment to act with authority and confidence. When you define what you want and commit to it, progress becomes inevitable. This card reminds you that strength comes from consistency and from trusting your own direction.',
      tr: 'Bu kart düzeni, istikrarı ve liderliği temsil eder. The Emperor, disiplin ve net sınırlar aracılığıyla durumun üzerinde kontrol kurmana rehberlik eder. Otorite ve özgüvenle hareket etmen gereken bir zamandır. Ne istediğini belirleyip buna bağlı kaldığında ilerleme kaçınılmaz olur. Bu kart, gücün tutarlılıktan ve kendi yönüne güvenmekten geldiğini hatırlatır.'
    }
  },
  {
    id: 5,
    name: 'The Hierophant',
    image: TheHierophant,
    answer: { en: 'Maybe', tr: 'Belki' },
    meaning: {
      en: 'This card represents wisdom, tradition, and guidance. There is value in learning from established structures and trusted mentors. Listen to advice, but also honor your own inner moral compass as you move forward. A deeper message of this card is the importance of choosing the right path with clarity rather than pressure. It encourages reconnecting with long-term values instead of short-term impulses. The Hierophant also highlights that your situation requires patience, grounded decisions, and a trust in the timing of life. If you seek an answer, it may not yet be fully revealed, but signs and guidance are surrounding you.',
      tr: 'Bu kart bilgeliği, geleneği ve rehberliği temsil eder. Yerleşik sistemlerden ve güvendiğin kişilerden öğrenmek değerlidir. Tavsiyeleri dinle ama ilerlerken kendi içsel pusulana da kulak ver. Bu kartın daha derin mesajı, baskıyla değil bilinçle doğru yolu seçmenin önemidir. Kısa vadeli dürtüler yerine uzun vadeli değerlerle yeniden bağlantı kurmanı ister. The Hierophant aynı zamanda durumunun sabır, sağlam kararlar ve yaşamın zamanlamasına güven gerektirdiğini vurgular. Aradığın yanıt tam olarak görünür olmayabilir fakat etrafında seni yönlendiren güçlü işaretler vardır.'
    }
  },

  {
    id: 6,
    name: 'The Lovers',
    image: TheLovers,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents harmony, connection, and soul-level choices. The Lovers brings together both the heart and the mind, reminding you that true alignment appears when desire and wisdom meet. A meaningful connection or important decision is approaching, and the more honestly you listen to your emotions, the clearer your path becomes. This card signals that unity, clarity, and heartfelt truth will guide the outcome you seek.',
      tr: 'Bu kart uyumu, bağlantıyı ve ruh düzeyindeki seçimleri temsil eder. The Lovers, kalp ile zihni bir araya getirir ve gerçek uyumun, arzu ile bilgelik birleştiğinde ortaya çıktığını hatırlatır. Anlamlı bir bağlantı veya önemli bir karar yaklaşmakta; duygularını dürüstçe dinledikçe yolun daha belirgin hale gelir. Bu kart, aradığın sonucun birlik, netlik ve kalpten gelen bir gerçeklikle şekilleneceğini gösterir.'
    }
  },
  {
    id: 7,
    name: 'The Chariot',
    image: TheChariot,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents determination, direction, and triumphant progress. The Chariot urges you to take the reins firmly and move forward with bold confidence. Challenges are not obstacles but tests of will, and victory comes when your focus remains unshaken. This energy shows that disciplined action and emotional control will open the road ahead, carrying you toward success with unstoppable momentum.',
      tr: 'Bu kart kararlılığı, yön bulmayı ve zaferle ilerlemeyi temsil eder. The Chariot, dizginleri sıkıca tutup cesur bir güvenle ilerlemeni ister. Karşına çıkan zorluklar engel değil, iradeni sınayan eşiklerdir. Odaklandığında zafer kaçınılmaz olur. Bu enerji, disiplinli bir hareketin ve duygusal dengeyle ilerlemenin yolunu açarak seni durdurulamaz bir ivmeyle başarıya taşır.'
    }
  },
  {
    id: 8,
    name: 'Strength',
    image: Strength,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents inner strength, compassion, and calm resilience. Strength reminds you that true power is gentle and steady, not forceful. When you meet challenges with patience and softness, you gain more control than any aggressive action could offer. Trust the quiet courage within you—this is a moment where grace becomes your greatest weapon and self-mastery leads you forward.',
      tr: 'Bu kart içsel gücü, şefkati ve sakin bir dayanıklılığı temsil eder. Strength, gerçek gücün sertlikten değil, yumuşak ve sabırlı bir duruştan geldiğini hatırlatır. Zorluklara sakinlikle yaklaştığında, agresif bir tavırdan çok daha fazla ilerleme kaydedersin. İçindeki sessiz cesarete güven; zarafet bu dönemde en güçlü silahındır ve öz disiplin seni ileri taşır.'
    }
  },
  {
    id: 9,
    name: 'The Hermit',
    image: TheHermit,
    answer: { en: 'Maybe', tr: 'Belki' },
    meaning: {
      en: 'This card represents introspection, guidance, and wisdom gained through solitude. The Hermit invites you to step away from noise so you can hear the truth forming within you. Answers will not come from others now—they grow quietly in your inner world. As you take time alone, clarity expands, and the next step reveals itself like a lantern lighting a dark path.',
      tr: 'Bu kart içe dönüşü, rehberliği ve yalnızlıkla kazanılan bilgeliği temsil eder. The Hermit, içindeki gerçeği duyman için gürültüden uzaklaşmanı ister. Cevaplar şu anda başkalarından gelmeyecek; kendi iç dünyanda sessizce şekilleniyorlar. Yalnız geçirdiğin her an, netliğinin artmasını sağlar ve bir sonraki adım karanlık yolu aydınlatan bir fener gibi ortaya çıkar.'
    }
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    image: WheelOfFortune,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents destiny, shifting cycles, and openings that change everything. The Wheel of Fortune turns in your favor, bringing moments where life accelerates unexpectedly. What once felt stuck begins to move, and new doors appear exactly when you need them. Stay adaptable—fate is aligning events to support your growth, and every turn brings you closer to a breakthrough.',
      tr: 'Bu kart kaderi, değişen döngüleri ve her şeyi dönüştürebilecek fırsatları temsil eder. Wheel of Fortune senin lehine dönüyor; hayatın beklenmedik şekilde hızlandığı anlar getiriyor. Tıkanmış görünen şeyler akmaya başlar ve tam ihtiyacın olan zamanda yeni kapılar açılır. Esnek kal; kader gelişimini desteklemek için olayları hizalıyor ve her dönüş seni bir sıçrama noktasına yaklaştırıyor.'
    }
  },
  {
    id: 11,
    name: 'Justice',
    image: Justice,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents truth, accountability, and balanced outcomes. Justice brings clarity where confusion existed and ensures that what is fair will prevail. Your choices now carry weight, and acting with honesty will align your path with favorable results. This is a moment to slow down, evaluate every angle, and make decisions rooted in integrity.',
      tr: 'Bu kart gerçeği, sorumluluğu ve dengeli sonuçları temsil eder. Justice, karışıklığın olduğu yerde netlik getirir ve adil olanın galip gelmesini sağlar. Bu dönemde seçimlerin önemlidir ve dürüstlükle hareket ettiğinde yolun olumlu şekilde ilerler. Yavaşlayıp her açıdan değerlendirme yapman ve kararlarını dürüstlükten güç alarak vermen gereken bir zamandır.'
    }
  },
  {
    id: 12,
    name: 'The Hanged Man',
    image: TheHangedMan,
    answer: { en: 'Maybe', tr: 'Belki' },
    meaning: {
      en: 'This card represents pause, surrender, and a shift in perspective. Progress requires willingly stepping back so that a deeper understanding can emerge. The Hanged Man teaches patience—when you release control, life rearranges itself in ways you could not see before. A new viewpoint will soon illuminate what once felt uncertain.',
      tr: 'Bu kart duraksamayı, teslimiyeti ve bakış açısındaki değişimi temsil eder. İlerleme, geri çekilip duruma daha derinden bakmayı gerektirir. The Hanged Man sabrı öğretir; kontrolü bıraktığında hayat daha önce göremediğin bir düzenle yeniden şekillenir. Yakında yeni bir bakış açısı, belirsiz görünen noktaları aydınlatacaktır.'
    }
  },
  {
    id: 13,
    name: 'Death',
    image: Death,
    answer: { en: 'No', tr: 'Hayır' },
    meaning: {
      en: 'This card represents endings, transformation, and powerful renewal. Death does not signal loss, but a deep release of what can no longer grow. Something old must fall away so a new beginning can finally rise. Allow the cycle to close naturally—rebirth always follows, bringing clarity, strength, and a direction that aligns with who you are becoming.',
      tr: 'Bu kart bitişleri, dönüşümü ve güçlü bir yenilenmeyi temsil eder. Death kaybı değil, artık büyümeyen şeylerin derin bir şekilde bırakılmasını simgeler. Yeni başlangıcın yükselebilmesi için eski olanın doğal olarak son bulması gerekir. Bu döngünün kapanmasına izin ver; yeniden doğuş her zaman gelir ve beraberinde netlik, güç ve gerçek benliğinle uyumlu yeni bir yön getirir.'
    }
  },
  {
    id: 14,
    name: 'Temperance',
    image: Temperance,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents balance, healing, and the blending of opposite forces. Temperance teaches moderation and harmony, guiding you to move with calm confidence. When you slow down and allow energies to mix naturally, the solution you seek emerges with ease. This is a time to trust the flow and stay centered.',
      tr: 'Bu kart dengeyi, iyileşmeyi ve zıt güçlerin uyumlu şekilde birleşmesini temsil eder. Temperance, ölçülülüğü ve uyumu öğreterek sakin bir güvenle ilerlemene rehberlik eder. Yavaşlayıp enerjilerin doğal şekilde kaynaşmasına izin verdiğinde aradığın çözüm kendiliğinden ortaya çıkar. Bu dönem, akışa güvenip merkezde kalma zamanıdır.'
    }
  },
  {
    id: 15,
    name: 'The Devil',
    image: TheDevil,
    answer: { en: 'No', tr: 'Hayır' },
    meaning: {
      en: 'This card represents restriction, temptation, and patterns that limit your growth. The Devil reveals the chains you may not realize you’re carrying—fear, attachment, or cycles that drain your energy. Awareness breaks these illusions. When you face your shadow honestly, the grip weakens and freedom begins.',
      tr: 'Bu kart kısıtlamaları, baştan çıkarmayı ve gelişimini sınırlayan döngüleri temsil eder. The Devil, farkında olmadan taşıyor olabileceğin zincirleri gösterir—korku, bağımlılık veya enerjini tüketen alışkanlıklar. Bu yanılsamaları kırmanın yolu farkındalıktır. Gölge yönünle dürüstçe yüzleştiğinde tutuş zayıflar ve özgürleşme başlar.'
    }
  },
  {
    id: 16,
    name: 'The Tower',
    image: TheTower,
    answer: { en: 'No', tr: 'Hayır' },
    meaning: {
      en: 'This card represents sudden change, awakening, and the collapse of what is unstable. The Tower shakes foundations that were never truly solid, clearing space for truth. Though the shift may feel intense, it brings liberation from illusions. What falls away now makes room for a stronger, more authentic structure.',
      tr: 'Bu kart ani değişimi, uyanışı ve sağlam olmayan temellerin yıkılmasını temsil eder. The Tower, gerçekte sağlam olmayan yapılara sarsıntı getirir ve gerçeğe yer açar. Bu değişim yoğun hissettirse de yanılsamalardan özgürleşme sağlar. Şu an yıkılan şeyler, daha güçlü ve daha gerçek bir yapı için alan yaratır.'
    }
  },
  {
    id: 17,
    name: 'The Star',
    image: TheStar,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents hope, divine guidance, and emotional renewal. The Star washes over you with gentle clarity, reminding you that you are supported by unseen forces. Healing is taking place, and your future is opening toward brighter possibilities. Believe in your path—your inner light is guiding you forward.',
      tr: 'Bu kart umudu, ilahi rehberliği ve duygusal yenilenmeyi temsil eder. The Star, üzerine yumuşak bir netlik enerjisi getirir ve görünmeyen güçler tarafından desteklendiğini hatırlatır. İyileşme süreci devam ediyor ve geleceğin daha parlak olasılıklara açılıyor. Yoluna güven; iç ışığın seni ileriye taşıyor.'
    }
  },
  {
    id: 18,
    name: 'The Moon',
    image: TheMoon,
    answer: { en: 'Maybe', tr: 'Belki' },
    meaning: {
      en: 'This card represents intuition, mystery, and navigating through uncertainty. The Moon blurs the edges of reality, urging you to rely on your deeper senses rather than surface appearances. Not everything is clear yet, but your emotions carry important truths. Move gently, trust your instincts, and allow the unseen to guide you.',
      tr: 'Bu kart sezgiyi, gizemi ve belirsizlik içinde ilerlemeyi temsil eder. The Moon, gerçekliğin sınırlarını bulanıklaştırır ve yüzeyde görünenlere değil, daha derin duyularına güvenmeni ister. Her şey henüz net değil, ancak duyguların önemli gerçekleri taşır. Nazikçe ilerle, sezgilerine güven ve görünmeyenin rehberliğine izin ver.'
    }
  },
  {
    id: 19,
    name: 'The Sun',
    image: TheSun,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents joy, illumination, and uplifting energy. The Sun clears away doubts and fills your path with clarity and confidence. Success becomes more achievable now, and your inner child is invited to come forward. Celebrate your light—this period radiates positivity and forward momentum.',
      tr: 'Bu kart neşeyi, aydınlanmayı ve yükselten enerjiyi temsil eder. The Sun, şüpheleri dağıtır ve yolunu netlik ve güvenle doldurur. Başarı bu dönemde çok daha ulaşılabilir hale gelir; içindeki çocuğun ortaya çıkmasına izin ver. Işığını kutla; bu dönem pozitiflik ve ilerlemenin enerjisini taşır.'
    }
  },
  {
    id: 20,
    name: 'Judgement',
    image: Judgement,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents awakening, rebirth, and evaluating your past with honesty. Judgement signals a moment of clarity where past choices turn into valuable lessons. You are being called to rise into a more authentic version of yourself. Accept what has been, release what no longer serves you, and move forward renewed.',
      tr: 'Bu kart uyanışı, yeniden doğuşu ve geçmişi dürüstçe değerlendirmeyi temsil eder. Judgement, geçmiş seçimlerin değerli derslere dönüştüğü bir netlik anını ifade eder. Kendinin daha gerçek bir hâline yükselmen için bir çağrıdır. Olanları kabul et, artık hizmet etmeyeni bırak ve yenilenmiş bir şekilde ilerle.'
    }
  },
  {
    id: 21,
    name: 'The World',
    image: TheWorld,
    answer: { en: 'Yes', tr: 'Evet' },
    meaning: {
      en: 'This card represents completion, fulfillment, and the mastery of a long cycle. The World brings wholeness—everything comes together with harmony, and a chapter reaches its perfect end. You are stepping into a phase of confidence and understanding. Celebrate the journey that brought you here, for a new beginning is already forming beyond this completion.',
      tr: 'Bu kart tamamlanmayı, bütünlüğü ve uzun bir döngünün ustalığını temsil eder. The World, her şeyin uyumla birleştiği ve bir bölümün kusursuz sona ulaştığı bir bütünlük hissi getirir. Kendini daha bilinçli ve güçlü bir döneme atarken bulursun. Seni buraya getiren yolculuğu kutla; çünkü bu tamamlanmanın ötesinde yeni bir başlangıç çoktan şekilleniyor.'
    }
  }

];
