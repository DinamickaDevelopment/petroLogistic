var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
}); 

/* GET about page */
router.get('/about', function (req, res) {
    res.render('about');
}); 

/* GET history page */
router.get('/history', function (req, res) {
    res.render('history');
}); 

/* GET services main page */
router.get('/services', function (req, res) {
    res.render('services');
});  

/* GET opec service page */
router.get('/services/opec', function (req, res) {
    res.render('opec');
}); 

/* GET soviet export service page */
router.get('/services/soviet', function (req, res) {
    res.render('soviet');
}); 

/* GET country reports page */
router.get('/services/country', function (req, res) {
    res.render('country');
}); 

/* GET posts page */
router.get('/posts', function (req, res) {
    res.render('posts');
}); 

/* GET single post page */
router.get('/post/:id', function (req, res) {
    switch (req.url) {
        case '/post/1': {
            res.render('post', {
                title: 'Will they or won\'t they', text: `
<p class="singlePostText">
November 30 will see the 171st Meeting of the Conference of the Organisation of the Petroleum Exporting Countries (OPEC) take place in Vienna.  Pressure has been steadily building for OPEC to take concrete action to back up its September 28 decision in Algiers to target production for OPEC-14 between 32.5 and 33 mb/d, in order to “accelerate the ongoing drawdown of the current stock overhang and bring market rebalancing forward.”
</p>
<p class="singlePostText">
While the Brent crude price has gyrated up and down since late September, it is important to note that nearby time spreads have continued to weaken from around $0.50/bbl to over $1/bbl in contango. This time spread is an indication of the cost to store the excess supply that is coming to market and indicates that not only does the market continue to be over supplied, but it is getting more expensive to store the excess barrels. 
</p>
<p class="singlePostText">
At these levels the market is pricing to store oil in ships, indicating that commercial availability of onshore storage is constrained. Storing oil in ships removes those ships from the market, leading to a subsequent increase in freight rates, which in turn makes floating storage more expensive, pressuring the market deeper into contango.  Consistent with this perspective, VLCC rates have hit six month highs in the past few weeks.
</p>
<p class="singlePostText">
This observed weakening of time spreads is aligned with the physical reality on the ground. Indications from all channels are that OPEC supply to market rose sharply in October.  Petro-Logistics’ weekly OPEC Production Monitor shows supply exceeded 34 mb/d, up over 1 mb/d since June.  November is on track to sustain OPEC supply around these levels and Russian supply has also been increasing, setting post-Soviet era records for production and more importantly exports of crude oil and refined products.
</p>
<p class="singlePostText">
In the debate of whether OPEC will or will not cut, it is important to understand that it is not enough to simply cut supply to balance with demand, which itself would be an achievement. The excess inventory that has accumulated over the last two years still exists and it is very material, approaching one billion barrels by IEA calculations.  And it’s still growing.
</p>
<p class="singlePostText">
To truly address the imbalance between supply and demand, OPEC will need to cut and cut deeply to make a difference. OPEC faced a similar scale challenge in December 2008, with oil prices having fallen by almost $100/bbl since that summer.  OPEC managed to find sufficient alignment to implement material cuts and support prices until oil demand recovered with the global economy.  On that occasion, OPEC made a significant commitment to cut production by 4.2 mb/d.  While not achieving this lofty goal, the results were impressive.  By OPEC’s secondary sources reckoning, they cut by around 2.7 mb/d in the first half of 2009 compared to an agreed baseline of September 2008 production.  This figure includes 250 kb/d of increased production from Iraq in the time period.  (Iraq was exempt from quota as production was still recovering from the first and second gulf wars).
</p>
<p class="singlePostText">
In this context it is worth considering the potential scenarios that may begin to emerge next week in Vienna.
</p>
<p class="singlePostText">
The member countries fail to reach agreement, separating in disarray as they did in April in Doha. This outcome would be likely to disappoint the market as well as continuing to add to the excess global inventory. Iran, Iraq, Saudi Arabia and Russia would continue to focus on expanding production, depressing prices and keeping them low through 2017. This dynamic increases the risk of political supply disruptions in several states, including Iraq, Venezuela, Libya and possibly Nigeria. A likely consequence of this scenario is that OPEC meets again early in the new –year to again try to agree a meaningful cut.
</p>
<p class="singlePostText">
OPEC continues trialling the recent practice of using communicating as a tool to steer the market without the need for physical intervention. This strategy has been effective at times for Central Banks in Europe, Japan and the US, however it is less well suited to the oil market, which is grounded in the reality of dealing with excess oil supply. With around $1/bbl of contango in the front of the curve, the physical market for oil continues to indicate that tanks are pretty full. If the answer from Vienna turns out to be a hollow verbal agreement to curtail supply with limited hard action to back it up, more oil will come and continue to pressure the front of the curve, dragging down oil price until something gives to help rebalance the market. Under this scenario, oil prices are likely to initially recover on news of an agreement being reached, but within a few weeks the weight of continued surplus production will drag the market lower again with a high probability of prices falling through the $40/bbl mark before end of Q1 2017.
</p>
<p class="singlePostText">
OPEC achieves a strong consensus not just in the concept of a cut but also the reality of it with member countries collectively reducing production to between 32.5 and 33 mb/d, as indicated in Algiers. In this scenario Saudi will likely carry a higher proportion of the adjustment, however all or substantially all countries will be expected to contribute. In 2008/09 Saudi cut 15%, Kuwait and UAE 12 to 13%, Algeria, Libya and Nigeria 10% and the others between 2 and 5%., so it is possible. Working against this scenario are the twin concerns of increased supply from Russia and the US and the prisoners dilemma that highlights to each OPEC member that they are best off if everyone else complies and they cheat.
</p>
<p class="singlePostText">
I believe the most likely scenario is 2 with much fanfare from OPEC about an agreement being reached in Vienna but most of the actual burden to cut is leveraged on Saudi with potential support from UAE and Kuwait while the others continue to produce at or near current levels, or higher. At first this outcome may look like scenario 3, making it important to really follow what happens next.
</p>
<p class="singlePostText">
To identify which outcome is being implemented in reality it will be important to watch exports, such as through Petro-Logistics’ weekly OPEC Production Monitor, and to keep a keen eye on time spreads. If they strengthen, OPEC will be making a real difference, if they weaken further, the glut continues.
</p>`})
            break;
        }
        case '/post/2': {

            res.render('post', {
                title: 'OPEC Decision Making – A Game Theory Approach', text: `
<p class="singlePostText">
In advance of OPEC's November 30 meeting in Vienna, at which they will seek to reach agreement on a production cut to between 32.5 and 33 mbd, it is worth reflecting on historic dynamics in the cartel.  The likely outcome is a lack of agreement and a continued supply surplus that will weigh on oil price and structure.
</p>
<p class="singlePostText">
OPEC represents a complex version of the classic game theory problem, the prisoner’s dilemma. To optimise collective value creation, OPEC members should increase production when prices are high, to gain market share, and reduce production when prices are low, to support price recovery. Research demonstrates, consistent with other prisoner’s dilemma problems, each OPEC member is instead individually incentivised to increase production whether prices are low or high. This has been the behaviour exhibited by most OPEC members throughout the cartel’s history.
</p>
<p class="singlePostText">
OPEC has previously found alignment during periods of recession, with sharp demand contraction leading to price declines, bouncing back as the economy recovers and removing the need for sustained OPEC cohesion. Current price weakness is driven instead by excess supply and anaemic demand growth, leading to a flatter supply cost curve. The price response from reduced OPEC supply is therefore muted, making cuts financially painful for those who participate as they sell less volume without enjoying a sufficiently higher price. This dynamic is compounded by faster supply response times from US shale producers, who will seek to expand market share again if prices rise. When combined with extraordinary capital market liquidity, keeping access to finance open and debt affordable, the current dynamics are likely to persist for an extended period unless there is material cohesive OPEC action or major disruption in a key producing country.
</p>
<p class="singlePostText">
Looking at who might align on production cuts, Libya and Nigeria are dealing with domestic conflict that has already impacted production, a dynamic that is mitigating at the time of writing, bringing more volume to market. Venezuela and PDVSA can ill afford to contribute, although desperately need higher prices to improve their precarious fiscal situation before they contribute involuntarily through a collapse of their government, their oil industry or both. Algeria, Angola, Gabon, Ecuador and Qatar are relatively stable yet declining producers that have not contributed meaningfully to OPEC actions previously and are unlikely to this time. Iraq’s government is embattled in conflict with ISIS, has fiscal troubles already requiring formal IMF Stand-by Arrangements and their diversified producer base operates under service contracts with volume targets to achieve anticipated financial compensation, making it hard to constrain production. This confluence has seen Iraqi exports grow strongly over the last few years, a dynamic that is expected to persist.
</p>
<p class="singlePostText">
Having faced difficult economic restructuring decisions while under sanctions, Iran is under little pressure to support a price increase and with exports approaching or even at pre-sanction levels it is now more a matter of relative market share with Saudi Arabia. This issue of market share is one that Iran will be reluctant to cede lightly to their ideological rival, although some indication has been made that Iran will consider pausing at or near current levels of production, which may represent a compromise driven in part by the need to secure and implement investments to grow further.
</p>
<p class="singlePostText">
This leaves the traditional “core OPEC” countries of Saudi, UAE and Kuwait. In the past the easiest way to characterise OPEC was that they all cheat, excepting this triumvirate, with UAE and Kuwait only contributing when absolutely necessary. The challenge for Saudi is UAE and Kuwait may not believe a cut is absolutely necessary given their strong financial positions. Kuwait will also rightly feel they have made a material contribution already through Saudi’s shuttering of the shared Neutral Zone production in 2015.
</p>
<p class="singlePostText">
The non-OPEC producer that may come to Saudi’s aid is Russia. Whether inclined to help or not, Russia’s oil market is largely built from myriad public and private interests rather than the centralized command and control structure of Saudi Aramco, the “K Companies” of Kuwait, ADNOC in Abu Dhabi or NIOC in Iran, all of whom have a true ability to regulate their production and exports. Roseneft is unlikely to burden a cut unilaterally, leaving a Russian freeze the best case scenario that Saudi can hope for.
</p>
<p class="singlePostText">
Russia’s blunt control instrument is allocations on the Transneft pipeline system. In previous promises to restrain supply, Russia has generally seen production and exports increase as their private sector takes advantage of higher prices, working their way around the Transneft control point, even when Russia has invoked it. With cash reserves declining $40 Billion in 2015 to stand at just $45.5 Billion in January 2016, Russia is more likely to contribute to supply curtailment by increasing taxation on the industry, a likely outcome irrespective of OPEC’s deliberations, however this lever takes time.
</p>
<p class="singlePostText">
Rather than an aligned and multi-lateral agreement to reduce production at OPEC’s November 30 meeting it is more likely to be outright disagreement, or a hollow agreement that once again leaves the burden to cut on Saudi Arabia, with potential support from the UAE.
</p>
<p class="singlePostText">
The probable result of this lack of accord is that a production cut is not achievable, with oil prices unlikely to sustainably hold above 50 $/bbl in the short term without significant support from external factors.
</p>
`})
            break;
        }
        case '/post/3': {

            res.render('post', {
                title: 'OPEC Agreement - 30 November 2016', text: `
<p class="singlePostText">With OPEC having reaffirmed their Algiers commitment to cut production, attention now turns to the details of the agreement and, of course, what actions are actually taken by OPEC and non-OPEC countries to curb production.  For now, the market has rewarded the cartel with a Brent oil price that has stabilised around the $50/bbl mark, below the highs achieved in October following the initial Algiers communication, but well above the lows of recent weeks as supply and exports from key OPEC producers and Russia surged to record highs.</p>
<p class="singlePostText">In quick summary the deal involves:</p>
<p class="singlePostText">
Six month commitment from 1 January, subject to review and potential extension for a further period when OPEC meets again in May 
</p>
<p class="singlePostText">
Most member countries agreed to a 4.5% cut from October 2016 production as reported by OPEC’s secondary sources 
</p>
<p class="singlePostText">
Exemptions were granted for Libya and Nigeria owing to ongoing domestic civil unrest
</p>
<p class="singlePostText">
Iran is permitted to increase its production by 90 kb/d over October 2016 levels in recognition that they are still ramping up production to pre-sanction levels, which Iran feels should reflect a 2005 rather than 2011 baseline
</p>
<p class="singlePostText">
Indonesia’s OPEC membership was suspended, thereby granting them an exemption.  This is hardly surprising given they are a net importer and were unlikely to make a contribution beyond net declines in production
</p>

<p class="singlePostText">
The deal is contingent on non-OPEC production cuts of 600 kb/d, with a commitment to “cut 300 kb/d gradually” over the first half of 2017 already received from Russia’s Oil Minister, Alexander Novak.  OPEC delegates indicated that Oman and Mexico have offered to make contributions and Azerbaijan and Kazakhstan are open to participate in OPEC/non-OPEC discussions that are now planned to take place on December 9th.
</p>

<p class="singlePostText">
Given the relatively poor history of both OPEC compliance to output limits and of non-OPEC participation, much attention will now focus on the details of compliance in the coming months.  This level of alignment amongst OPEC members has occurred a limited number of times in the past and on those occasions has led to at least some meaningful level of impact on supply to the market.  At other times the agreements have been broadly hollow and led to further declines in prices and renewed OPEC negotiations.
</p>

<p class="singlePostText">
In assessing the possible outcomes it is worth pausing to reflect on what it took to achieve this agreement, particularly given that OPEC is a governmental rather than corporate entity.  The negotiations therefore tend to be more akin to diplomacy that commercial discussions.  A number of key aspects are worth mentioning in this regard:
</p>
<p class="singlePostText">
All OPEC members agreed to accept OPEC’s secondary sources as the basis for production levels from which cuts (or increases) will be measured.  This is a significant coup for the Secretariat following months of animosity from Iraq and Iran in particular with regard to their figures.  Secondary source figures are generally lower than direction communications from most member countries.
</p>
<p class="singlePostText">
Saudi Arabia was willing to accede to Iran’s demand that they would not accept a cut or a freeze.  It is unlikely that Iran would have accepted a deal that required them to cut, even if they were granted other concessions.  This represents a material softening of the Saudi position.
</p>
<p class="singlePostText">
Iraq was willing to accept a 4.5% cut in their production even as exemptions were granted to Libya and Nigeria and Iran was afforded an increased allocation.  This marks the first formal statement of a limit for Iraqi production within OPEC since 1998, making it a very significant concession that may yet prove a sticking point.
</p>
<p class="singlePostText">
Despite agreement on the baseline for cuts, it was made clear in the press conference that this does not constitute a return to the quota system for OPEC and that the “allocations” made to each producer were without prejudice to any future agreement on quotas.  This statement is almost certainly a compromise between Saudi, Iran and Iraq with regard to their recent market share wrangling.
</p>
<p class="singlePostText">
Turning now to what it means from here, it is highly likely that at least some form of compliance will occur, which is positive in terms of addressing the significant overhang of crude and refined products in the market today.  On past form, Saudi will stick to their word with near full support from UAE and Kuwait and lower levels of compliance from other member countries.  On average the compliance to total agreed December 2008 cuts was around 66% in the first half of 2009, representing one of the strongest periods of OPEC alignment.  In 2001/2002 there were reductions post 9/11, led by the core of OPEC (Saudi, UAE and Kuwait) with limited participation from others, beyond declines or supply disruptions, while in 1998 it took three rounds of agreements to finally achieve a reasonable level of compliance, despite oil prices languishing around $10/bbl in the wake of the Asian Financial Crisis.
</p>

<p class="singlePostText">
From a non-OPEC perspective, gaining verbal commitment to participate with OPEC action has not typically been an issue, however compliance with those commitments has proven elusive.  An additional complication is that the commitment from Russia to a 300 kb/d cut, implemented gradually over the first half of 2017, implies a net production cut of far less than 3% over the first half while OPEC members have committed to 4.5%.  It remains unclear from exactly which level Russia will cut with some commentators indicating it may be from 2017 forecast production rather than October 2016 actual figures, meaning limited contribution in reality.
</p>
<p class="singlePostText">
Achieving the balance of 300 kb/d to meet the 600 kb/d non-OPEC production cut would require large commitments from amongst producers like Oman, Kazakhstan, Mexico, Azerbaijan, Brazil or Norway.  
</p>

<p class="singlePostText">
While Oman carries some credibility in terms of commitment to a cut, it is unlikely they will outperform OPEC’s 4.5% commitment and may only offer a cut in line with Russia’s headline 3% commitment, implying a 30 to 45 kb/d contribution.

</p>

<p class="singlePostText">
It seems improbable that Kazakhstan would commit to cut just as they finally bring on stream the giant (and giant problem plagued) Kashagan field, however on the same basis as Oman this would imply a 50-75 kb/d cut.
</p>

<p class="singlePostText">
Mexico and Azerbaijan’s underlying declines are likely to be their sole contributions, which is line with status quo expectations before OPEC’s action, leaving a material hole for other contributors to fill.  Given the ongoing economic woes in Brazil and recent significant effort to boost production in Norway, in all the gap feels like a bridge too far.
</p>

<p class="singlePostText">
On the above basis it is likely that non-OPEC will fail to live up to its obligations in real terms, however it is unlikely that OPEC will be incentivised to react negatively to this news in the near term unless the oil glut continues to weigh on absolute prices and/or Russia continues to overtly and aggressively expand production.  We expect OPEC to represent non-OPEC’s contribution in a positive light to continue attempts to tease the market higher until fundamentals improve.
</p>

<p class="singlePostText">
To monitor compliance, OPEC has established a technical committee to be chaired by Kuwait and involving Venezuela, Algeria and two non-OPEC representatives (likely to be Russia and Oman) with support from the OPEC Secretariat.
</p>
<p class="singlePostText">
While OPEC will monitor production volumes, from a market perspective it is as or more important to know not just how much is cut, but what is cut.  With Libya, Nigeria and Indonesia granted exemptions, the bulk of cuts will be from medium sour producers in OPEC.  Russia and Oman, who are likely to represent the bulk of non-OPEC contributions, are also medium sour producers.  
</p>
<p class="singlePostText">
On the surface this will see a reduction in short residue availability for cokers and other heavy upgrading units.  With the expectation that excess inventories will begin to draw, we will see an increase in light sweet availability as that is most likely what has been stored during the extended period of contango.
</p>
<p class="singlePostText">
In principle these dynamics point to a weakening of naphtha and a tightening of fuel oil cracks, narrowing the light heavy differential.  In contrast to past periods, however, it is possible that Saudi Arabia in particular focuses reductions on their lighter grades, such as Arab Extra-Light.  Other OPEC members will be tempted to remove condensate streams from crude exports to feign compliance as condensates are not included in OPEC figures.  Monitoring of grade specific export behaviour will therefore be of even greater importance through this period to understand real time market dynamics.
</p>
<p class="singlePostText">
Petro-Logistics specialises in the monitoring of OPEC, Russian and FSU crude oil and condensate production, supply and exports at a grade specific level, shining light into the hard to see corners of the oil market.  Please contact us for more information on our country specific reports.
</p>` })
            break; 
        }
    }
}); 

/* GET contacts page */
router.get('/contact', function (req, res) {
    res.render('contact');
}); 

/* GET login page */
router.get('/login', function (req, res) {

    res.render('login');

}); 

router.post('/send_form', function (req, res) {

   
    var data = req.body; 

	var str = JSON.stringify({

        "key": "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",
        "subject": "Contact Message",
        "emailTo": "s.timofeyeva@dinamicka.com",
        "emailFrom": "info@dinamicka.com",
        "html": '<strong> Message </strong> ' +
        '<p>First name: ' + data.first_name + '</p>' +
        '<p>Last name: ' + data.last_name + '</p>' +
        '<p>Email: ' + data.email + '</p>' + 
        '<p>Company: ' + data.company + '</p>' + 
        '<p>Phone: ' + data.phone + '</p>' + 
        '<p>Message: ' + data.comment + '</p>'

    });


     var data_to_send = encodeURI(str);
     var request_data = 'req=' + data_to_send;


     var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
            'Content-Length': Buffer.byteLength(request_data)
        },
        hostname: 'dinamickamail.azurewebsites.net',
        path: '/mail.php'

	}

	var http_req = http.request(options);
	http_req.write(request_data);
    http_req.end();
    http_req.on('error', function (err) {
        console.log(err);
    }); 

    res.send('OK');

})

module.exports = router;