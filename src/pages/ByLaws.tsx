import React from 'react';
import AllEventsNavbar from '@/components/AllEventsNavbar';
import { Download } from 'lucide-react';
import SEO from "@/components/SEO";
import bylawsPdf from "@/assets/soikot-bylaws-2026.pdf.asset.json";

const Section: React.FC<{ article: string; title: string; children: React.ReactNode }> = ({ article, title, children }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
    <h2 className="text-2xl font-bold text-bengali-dark mb-2">{article}</h2>
    <h3 className="text-xl font-bold text-bengali-dark mb-4">{title}</h3>
    {children}
  </div>
);

const ByLaws = () => {
  return (
    <div className="font-bengali">
      <SEO title={"Bylaws - Soikot"} description={"Read the official Bylaws of Soikot, the Bengali Association of Tampa Bay, outlining our mission, membership, governance and Executive Committee structure."} path={"/by-laws"} />
      <AllEventsNavbar />
      <main>
        <section className="py-8 md:py-12 bg-gradient-to-b from-bengali-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="prose prose-lg max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark mb-2"><span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Soikot Bylaws</span></h1>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
                <p className="text-bengali-dark mb-6">Revision 5 &mdash; Effective August 1, 2026</p>
                <a
                  href={bylawsPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 text-sm rounded-xl shadow-lg bg-bengali-red text-white no-underline hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                  Download Bylaws (PDF)
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-sky-500">
                <p className="mb-0">
                  Adopted pursuant to Florida Statutes, Chapter 617. These Bylaws supersede all prior
                  versions upon adoption in accordance with Article IX.
                </p>
              </div>

              <Section article="ARTICLE I" title="NAME, STATUS, PURPOSE, MISSION AND VISION">
                <h4 className="font-bold text-bengali-dark mb-2">1.1 Name and Status</h4>
                <p className="mb-6">
                  The name of the Association shall be Soikot (&ldquo;the Association&rdquo;), a not-for-profit
                  corporation incorporated under the laws of the State of Florida.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">1.2 Purpose</h4>
                <p className="mb-4">
                  The purpose of the Association is to carry out religious, charitable, educational, literary,
                  cultural, and social purposes, including but not limited to:
                </p>
                <ul className="mb-4 pl-6 space-y-2 list-disc">
                  <li>Celebration of Bengali religious and cultural festivals,</li>
                  <li>Promotion of Bengali language, literature, arts, and heritage, educational activities, particularly for children, and</li>
                  <li>Charitable and humanitarian assistance.</li>
                </ul>
                <p className="mb-6">
                  The Association shall comply with Section 501(c)(3) of the Internal Revenue Code. No part
                  of the net earnings shall inure to the benefit of any private individual. The Association shall
                  not participate in political campaigns or substantial legislative activity.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">1.3 Mission</h4>
                <p className="mb-4">
                  The mission of the Association is to create opportunities for the preservation, promotion,
                  and celebration of Bengali culture, language, traditions, and values while fostering an
                  open, inclusive, and welcoming community.
                </p>
                <p className="mb-6">
                  Soikot is committed to engaging, supporting, and integrating Bengali families in the Tampa
                  Bay area, providing opportunities for them to participate in cultural, educational, and
                  community activities, and to build meaningful connections with existing members&mdash;regardless
                  of sponsorship level, tenure, or background&mdash;while continuing to serve and value the
                  broader Soikot family.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">1.4 Vision</h4>
                <p className="mb-4">
                  The Association envisions a vibrant, inclusive, and ever-growing Bengali community where
                  new and existing families feel equally welcomed, connected, and valued.
                </p>
                <p className="mb-0">
                  We aspire to be a trusted cultural home for Bengali families relocating to the Tampa Bay
                  area&mdash;helping them blend seamlessly into the community&mdash;while honoring our shared
                  heritage, nurturing future generations, and strengthening bonds across all stages of
                  membership and participation.
                </p>
              </Section>

              <Section article="ARTICLE II" title="MEMBERSHIP">
                <h4 className="font-bold text-bengali-dark mb-2">2.1 Membership Corporation</h4>
                <p className="mb-6">
                  The Association shall be a membership corporation supported through event registrations,
                  donations, sponsorships, and other voluntary contributions. Membership does not create
                  any ownership or equity interest in the Association.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">2.2 Community Participation and Membership</h4>
                <p className="mb-4">
                  Participation in SOIKOT&rsquo;s religious, cultural, educational, charitable, and community
                  activities is available to individuals and families through paid registration for Association
                  events in accordance with the policies established by the Executive Committee.
                  Participation in Association events, by itself, does not constitute membership.
                </p>
                <p className="mb-6">
                  Membership reflects an ongoing commitment to the Association and entitles eligible
                  individuals and families to the rights and privileges provided under these Bylaws, including
                  voting rights and eligibility for nomination to the Executive Committee, subject to the
                  provisions of these Bylaws. Membership shall be determined solely in accordance with the
                  eligibility requirements set forth in Section 2.3.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">2.3 Membership Eligibility</h4>
                <p className="mb-4">
                  Membership shall be open to individuals and families who support the objectives of the
                  Association and satisfy the membership eligibility requirements set forth in these Bylaws.
                  To be eligible for membership, an individual or family must:
                </p>
                <ol className="list-decimal mb-4 pl-6 space-y-2">
                  <li>Be a resident of the Greater Tampa Bay Area; and</li>
                  <li>Be a registered paid participant for SOIKOT events for a minimum of three (3) Association events per calendar year for at least two (2) consecutive calendar years.</li>
                </ol>
                <p className="mb-6">
                  Membership shall become effective upon satisfying the above eligibility requirements and
                  shall remain in good standing provided the individual or family continues to meet the annual
                  participation requirement. A member who does not meet the minimum participation
                  requirement for two (2) consecutive calendar years shall cease to be a member unless
                  otherwise determined by the Executive Committee under exceptional circumstances.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">2.4 Categories and Voting Rights</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-bengali-light">
                        <th className="py-3 px-4 text-left border-b border-bengali-red">Category</th>
                        <th className="py-3 px-4 text-left border-b border-bengali-red">Voting Rights</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Family</td>
                        <td className="py-3 px-4">One (1) vote per household</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Individual</td>
                        <td className="py-3 px-4">One (1) vote</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Student</td>
                        <td className="py-3 px-4">One (1) vote</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Supporting Member (Commercial Sponsor)</td>
                        <td className="py-3 px-4">No voting rights</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold text-bengali-dark mb-2">2.5 Supporting Members</h4>
                <p className="mb-0">
                  Supporting Members (Commercial Sponsors) are individuals or entities that provide
                  financial or in-kind support to the Association. Supporting Members shall have no voting
                  rights, no governance authority, and no eligibility for nomination or appointment to the
                  Executive Committee solely by virtue of their status as a Supporting Member.
                </p>
              </Section>

              <Section article="ARTICLE III" title="EXECUTIVE COMMITTEE (EC)">
                <h4 className="font-bold text-bengali-dark mb-2">3.1 Authority</h4>
                <p className="mb-6">
                  The Executive Committee (&ldquo;EC&rdquo;) shall be the sole governing and fiduciary body of the
                  Association and shall be responsible for strategic direction, financial stewardship, and legal
                  compliance.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">3.2 Composition</h4>
                <p className="mb-6">
                  The Executive Committee shall consist of the members serving at the time these Bylaws are
                  adopted. Beginning with the 2028 Executive Committee selection cycle, the Executive
                  Committee shall consist of not fewer than five (5) and not more than nine (9) members.
                  Thereafter, the Executive Committee shall continue to be constituted within this range,
                  except where a temporary vacancy exists until such vacancy is filled in accordance with
                  these Bylaws.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">3.3 Term</h4>
                <p className="mb-6">
                  Executive Committee members shall serve terms of two (2) years each. No Executive
                  Committee member may serve more than two (2) consecutive terms, for a maximum
                  continuous service period of four (4) years. Following completion of two (2) consecutive
                  terms, the member must observe a mandatory cooling-off period of two (2) years before
                  becoming eligible for nomination again.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">3.4 Selection of EC Members</h4>
                <p className="mb-6">
                  Executive Committee members shall ordinarily be selected through a nomination and
                  consensus-based process. If the number of eligible nominees exceeds the number of
                  available positions, the Election Committee shall conduct a fair and confidential vote among
                  eligible voting members in accordance with procedures approved for that selection cycle.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">3.5 Resignation, Removal, and Vacancies</h4>
                <p className="mb-0">
                  An EC member may resign by providing written notice to the Executive Committee. An EC
                  member may be removed for material violation of these Bylaws, breach of fiduciary duty,
                  misconduct, prolonged non-participation, or conduct materially harmful to the Association,
                  following written notice and a reasonable opportunity to respond. Removal shall require
                  approval by at least two-thirds (2/3) of the remaining EC members, with the affected member
                  not voting. Any vacancy may be filled for the remainder of the term through the nomination
                  and selection process established in Article V.
                </p>
              </Section>

              <Section article="ARTICLE IV" title="SUB-COMMITTEES">
                <h4 className="font-bold text-bengali-dark mb-2">4.1 Formation</h4>
                <p className="mb-6">
                  The EC may establish standing, temporary, advisory, or operational Sub-Committees to
                  support the activities of the Association. These may include Culture, Finance, Food,
                  Marketing, Durga Puja, Shopping, Procurement and Logistics, Artists and Hospitality, Youth,
                  Communications, charitable or humanitarian activities, and other operational needs. The EC
                  shall define each Sub-Committee&rsquo;s purpose, chair, membership, responsibilities, reporting
                  obligations, and term through separate operating procedures or committee charters.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">4.2 Authority</h4>
                <ul className="list-disc mb-6 pl-6 space-y-2">
                  <li>Shall have no governing or voting authority with respect to EC decisions,</li>
                  <li>Shall operate under EC oversight, and</li>
                  <li>Shall serve as a leadership development pathway.</li>
                </ul>

                <h4 className="font-bold text-bengali-dark mb-2">4.3 Participation and Appointments</h4>
                <p className="mb-0">
                  The EC shall actively communicate Sub-Committee opportunities to the broader community
                  and may appoint eligible members and volunteers based on interest, experience,
                  organizational needs, and willingness to serve. Sub-Committee service shall not itself confer
                  voting or governance rights, but may satisfy the leadership-service requirement for future
                  EC eligibility under Article V.
                </p>
              </Section>

              <Section article="ARTICLE V" title="ELIGIBILITY, NOMINATION, AND TERM LIMITS">
                <h4 className="font-bold text-bengali-dark mb-2">5.1 Eligibility for EC Nomination</h4>
                <p className="mb-4">A member shall be eligible for nomination to the EC only if the member:</p>
                <ol className="list-decimal mb-6 pl-6 space-y-2">
                  <li>Has met membership eligibility requirements for at least five (5) consecutive years, and</li>
                  <li>Has served on one or more Sub-Committees for the most recent two (2) years.</li>
                </ol>

                <h4 className="font-bold text-bengali-dark mb-2">5.2 Nomination</h4>
                <p className="mb-6">
                  Eligible members may be nominated by at least two (2) voting members or jointly by the
                  Executive Committee and the Election Committee formed for the applicable selection cycle.
                  Self-nomination shall not be permitted.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">5.3 Election Committee (3&ndash;5 Members)</h4>
                <p className="mb-6">
                  The Executive Committee shall appoint an Election Committee consisting of three (3) to five
                  (5) members for each Executive Committee selection cycle. Members of the Election
                  Committee shall be independent of the nomination process, shall not be candidates for the
                  Executive Committee during that selection cycle, and shall oversee the nomination and
                  selection process in a fair and impartial manner.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">5.4 Cooling-Off Period</h4>
                <p className="mb-0">
                  Following two consecutive terms, a member must observe a one-term (two-year) cooling-off
                  period before becoming eligible again.
                </p>
              </Section>

              <Section article="ARTICLE VI" title="ADVISORY BOARD">
                <h4 className="font-bold text-bengali-dark mb-2">6.1 Purpose</h4>
                <p className="mb-6">
                  The Advisory Board serves as an independent, non-voting advisory and guidance body to
                  support the Executive Committee (EC), encourage adherence to Soikot&rsquo;s Bylaws and
                  mission, and promote transparency, continuity, and fairness in organizational processes.
                  The Advisory Board shall have no governing, fiduciary, or operational authority and shall not
                  participate in day-to-day operations.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">6.2 Composition</h4>
                <ul className="list-disc mb-6 pl-6 space-y-2">
                  <li>The Advisory Board shall consist of three (3) to five (5) members.</li>
                  <li>Members should be respected senior community members; past EC members are preferred but not required.</li>
                  <li>Advisory Board members may not serve on the Executive Committee concurrently.</li>
                  <li>Members shall serve three-year staggered terms to ensure continuity.</li>
                </ul>

                <h4 className="font-bold text-bengali-dark mb-2">6.3 Governance &amp; Oversight Responsibilities</h4>
                <ul className="list-disc mb-6 pl-6 space-y-2">
                  <li>Ensure EC actions align with Soikot&rsquo;s bylaws and mission.</li>
                  <li>Review governance concerns when necessary.</li>
                  <li>Recommend reconsideration of decisions that may conflict with bylaws or community trust.</li>
                </ul>

                <h4 className="font-bold text-bengali-dark mb-2">6.4 Strategic Guidance &amp; Continuity</h4>
                <ul className="list-disc mb-6 pl-6 space-y-2">
                  <li>Provide institutional memory and continuity.</li>
                  <li>Offer guidance on long-term direction and community positioning when requested.</li>
                </ul>

                <h4 className="font-bold text-bengali-dark mb-2">6.5 Transparency &amp; Accountability</h4>
                <ul className="list-disc mb-4 pl-6 space-y-2">
                  <li>Review the annual financial summary for transparency.</li>
                  <li>Seek clarification on major decisions impacting reputation, governance, or community trust.</li>
                </ul>
                <p className="mb-6">The Advisory Board shall not manage finances or operations.</p>

                <h4 className="font-bold text-bengali-dark mb-2">6.6 Conflict Resolution &amp; Governance Review</h4>
                <p className="mb-4">
                  The Advisory Board may serve as a neutral body to review disputes or governance concerns
                  and recommend resolutions to preserve integrity and community trust.
                </p>
                <p className="mb-6">
                  A member raising a grievance shall submit the concern in writing to the EC or, where the
                  matter concerns the EC, to the Advisory Board. The reviewing body shall provide the
                  affected parties a reasonable opportunity to respond and shall issue a written, non-binding
                  recommendation or decision, as applicable, consistent with these Bylaws and any grievance
                  procedures adopted by the EC.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">6.7 Matters Eligible for Advisory Board Review</h4>
                <ul className="list-disc mb-6 pl-6 space-y-2">
                  <li>Election disputes</li>
                  <li>Proposed bylaw amendments</li>
                  <li>Removal of an EC member</li>
                  <li>Governance or reputational concerns</li>
                </ul>

                <h4 className="font-bold text-bengali-dark mb-2">6.8 Operating Principle</h4>
                <p className="mb-0">
                  The Advisory Board provides oversight and guidance while preserving the Executive
                  Committee&rsquo;s operational authority.
                </p>
              </Section>

              <Section article="ARTICLE VII" title="MEETINGS">
                <h4 className="font-bold text-bengali-dark mb-2">7.1 General Body Meeting</h4>
                <p className="mb-6">
                  A General Body Meeting shall be held once per EC selection cycle, meaning once every two
                  (2) years, to review activities, financial reports, and proposed bylaw amendments.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">7.2 Quorum</h4>
                <p className="mb-6">
                  Quorum for a General Body Meeting shall be twenty-five (25) voting members or ten percent
                  (10%) of voting members, whichever is lower.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">7.3 Executive Committee Meetings</h4>
                <p className="mb-6">
                  The EC shall meet at least once (1) per year. A quorum for any meeting of the Executive
                  Committee shall consist of a majority of the current Executive Committee members.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">7.4 Operating Procedures</h4>
                <p className="mb-0">
                  Day-to-day operational activities and procedures shall not be part of these Bylaws and shall
                  instead be governed through operating procedures followed by the EC.
                </p>
              </Section>

              <Section article="ARTICLE VIII" title="FINANCIAL MANAGEMENT AND CONTROLS">
                <h4 className="font-bold text-bengali-dark mb-2">8.1 Fiscal Year</h4>
                <p className="mb-6">
                  The fiscal year of the Association shall be the calendar year, January 1 through December 31.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">8.2 Bank Accounts</h4>
                <p className="mb-6">
                  All funds of the Association shall be deposited in financial institutions approved by the EC
                  and held in the name of the Association.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">8.3 Authorized Signatories</h4>
                <p className="mb-6">
                  All Association bank accounts shall require a minimum of two (2) authorized signatories
                  from within the Executive Committee. No individual shall have unilateral authority to
                  withdraw or disburse funds.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">8.4 Expenditure Authorization</h4>
                <p className="mb-6">
                  All expenditures shall be authorized in accordance with procedures approved by the EC and
                  shall require approval by at least two (2) EC members.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">8.5 Records</h4>
                <p className="mb-6">
                  Records and reporting shall be governed in alignment with requirements advised by the
                  Association&rsquo;s CPA.
                </p>

                <h4 className="font-bold text-bengali-dark mb-2">8.6 Financial Reporting</h4>
                <p className="mb-0">
                  A summary of financial activity shall be presented to members at the General Body Meeting.
                </p>
              </Section>

              <Section article="ARTICLE IX" title="AMENDMENTS">
                <p className="mb-0">
                  Amendments to these Bylaws may be proposed by the EC or by any voting member
                  supported by five (5) additional voting members. All amendments require approval by a
                  two-thirds (2/3) majority of voting members present at a General Body Meeting.
                </p>
              </Section>

              <Section article="ARTICLE X" title="DISSOLUTION">
                <p className="mb-0">
                  Upon dissolution of the Association, remaining assets shall be distributed exclusively for
                  purposes qualifying under Section 501(c)(3) of the Internal Revenue Code to organizations
                  with similar objectives.
                </p>
              </Section>

              <Section article="ARTICLE XI" title="TRANSITIONAL PROVISIONS">
                <h4 className="font-bold text-bengali-dark mb-2">11.1 Transitional Implementation</h4>
                <p className="mb-4">
                  To facilitate an orderly transition to the governance structure established by these Bylaws,
                  the Association shall begin socializing the new structure immediately and shall identify and
                  invite additional members to serve on the Sub-Committees. Beginning with the 2028
                  Executive Committee selection cycle, the Executive Committee shall be limited to a
                  maximum of nine (9) members. Accordingly, at least eight (8) members of the Executive
                  Committee serving at the time these Bylaws are adopted shall step down by the 2028
                  selection cycle so that up to four (4) eligible members emerging from the Sub-Committees
                  may join the Executive Committee, subject to the nomination and selection provisions of
                  these Bylaws.
                </p>
                <p className="mb-0">
                  The four-year maximum continuous service limit and the mandatory two-year cooling-off
                  period shall apply to all Executive Committee members. Service completed before the
                  effective date of these Bylaws shall be considered by the Election Committee in
                  implementing an orderly and fair transition, while ensuring that the Executive Committee
                  composition complies with Section 3.2 beginning in 2028.
                </p>
              </Section>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">REVISION HISTORY</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-bengali-light">
                        <th className="py-3 px-4 text-left border-b border-bengali-red">Revision</th>
                        <th className="py-3 px-4 text-left border-b border-bengali-red">Date</th>
                        <th className="py-3 px-4 text-left border-b border-bengali-red">Changes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold">Original</td>
                        <td className="py-3 px-4">03/08/03</td>
                        <td className="py-3 px-4">Original Issue</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold">Revision 1</td>
                        <td className="py-3 px-4">06/07/03</td>
                        <td className="py-3 px-4">Officers also Directors, two incumbents for positions other than President.</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold">Revision 2</td>
                        <td className="py-3 px-4">10/12/03</td>
                        <td className="py-3 px-4">Allow election for Director positions only, no Officers designated. Added III (c), minor changes elsewhere.</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold">Revision 3</td>
                        <td className="py-3 px-4">07/02/04</td>
                        <td className="py-3 px-4">Articles of Incorporation amended to include "Disposition of assets upon dissolution" clause as required by IRS overrides Article VII above</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold">Revision 4</td>
                        <td className="py-3 px-4">10/9/11</td>
                        <td className="py-3 px-4">Increased number of Directors from Nine (9) to Eleven (11)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors align-top">
                        <td className="py-3 px-4 font-semibold">Revision 5</td>
                        <td className="py-3 px-4">8/1/26</td>
                        <td className="py-3 px-4">
                          Restatement of the Bylaws (see summary of changes below) — ratified by General Body Meeting.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-sky-500">
                <h2 className="text-2xl font-bold text-bengali-dark mb-2">SUMMARY OF CHANGES &mdash; REVISION 5 (8/1/26)</h2>
                <p className="mb-6">
                  Revision 5 is a full restatement of the Bylaws, replacing the 2003&ndash;2011 text. Key changes
                  compared with Revision 4:
                </p>
                <ol className="list-decimal pl-6 space-y-4 mb-0">
                  <li>
                    <strong>New Mission and Vision (Article I):</strong> Added formal Name/Status, Mission, and
                    Vision statements emphasizing inclusion and welcoming newly relocated Bengali
                    families in Tampa Bay. The purpose statement was condensed; references to a literary
                    magazine and library were removed.
                  </li>
                  <li>
                    <strong>Membership redefined (Article II):</strong> Funding is now described as event
                    registrations, donations and sponsorships rather than membership dues. Membership is
                    no longer granted by Board approval of an application &mdash; it now requires residency in the
                    Greater Tampa Bay Area plus paid participation in at least three (3) events per year for
                    two (2) consecutive years, and lapses after two consecutive years of non-participation.
                    Event participation alone does not confer membership.
                  </li>
                  <li>
                    <strong>Voting categories updated (Section 2.4):</strong> &ldquo;Family&rdquo; now carries one (1) vote per
                    household (previously husband and wife each voted). &ldquo;Patron&rdquo; was replaced by
                    &ldquo;Supporting Member (Commercial Sponsor),&rdquo; explicitly with no voting rights, no
                    governance authority, and no EC eligibility. Dues-based suspension of voting rights was
                    removed.
                  </li>
                  <li>
                    <strong>Board of Directors replaced by an Executive Committee (Article III):</strong> The EC is the
                    sole governing and fiduciary body. Size is set at five (5) to nine (9) members beginning
                    with the 2028 selection cycle (down from up to eleven (11) Directors). The prescriptive
                    officer slate (President, two Vice Presidents, two Secretaries, two Treasurers, two
                    Program Coordinators) and the detailed officer duties were removed.
                  </li>
                  <li>
                    <strong>Term limits and cooling-off period added (Sections 3.3 and 5.4):</strong> Two-year terms,
                    a maximum of two consecutive terms (four years), followed by a mandatory two-year
                    cooling-off period before renomination.
                  </li>
                  <li>
                    <strong>New selection process (Sections 3.4, 5.1&ndash;5.3):</strong> Nomination and consensus-based
                    selection, with a confidential vote only when nominees exceed open seats. Eligibility
                    now requires five (5) consecutive years of membership and two (2) recent years of
                    Sub-Committee service. Self-nomination is prohibited; nomination requires two voting
                    members. An independent Election Committee of three (3) to five (5) members oversees
                    each cycle.
                  </li>
                  <li>
                    <strong>Removal process changed (Section 3.5):</strong> Removal of an EC member now requires a
                    two-thirds (2/3) vote of the remaining EC members after written notice and an
                    opportunity to respond, instead of a vote of the general membership.
                  </li>
                  <li>
                    <strong>Sub-Committees formalized (Article IV):</strong> New article establishing standing and
                    temporary Sub-Committees (Culture, Finance, Food, Marketing, Durga Puja, Logistics,
                    Hospitality, Youth, Communications and others) under EC oversight, positioned as the
                    leadership development pathway to EC eligibility.
                  </li>
                  <li>
                    <strong>Advisory Board created (Article VI):</strong> New independent, non-voting body of three (3)
                    to five (5) senior community members serving staggered three-year terms, providing
                    governance oversight, continuity, transparency review, and neutral review of grievances,
                    election disputes, proposed amendments, and EC removals.
                  </li>
                  <li>
                    <strong>Meetings and quorum revised (Article VII):</strong> General Body Meeting is held once per
                    two-year selection cycle, with quorum of twenty-five (25) voting members or ten percent
                    (10%) of voting members, whichever is lower (previously a majority of members). EC
                    meetings are required at least once per year (previously four Board meetings per year),
                    with a majority quorum. The requirement to hold elections on the day of Durga Puja was
                    removed, and day-to-day matters were moved out of the Bylaws into EC operating
                    procedures.
                  </li>
                  <li>
                    <strong>Financial controls added (Article VIII):</strong> New article requiring EC-approved banking
                    institutions, a minimum of two (2) authorized signatories, dual approval of all
                    expenditures, no unilateral disbursement authority, CPA-aligned recordkeeping, and a
                    financial summary presented at the General Body Meeting.
                  </li>
                  <li>
                    <strong>Amendment procedure tightened (Article IX):</strong> All amendments now require a
                    two-thirds (2/3) majority of voting members present at a General Body Meeting. The
                    Board&rsquo;s ability to amend most articles on its own was removed. Member-initiated
                    proposals require support from five (5) additional voting members.
                  </li>
                  <li>
                    <strong>Dissolution simplified (Article X):</strong> Retains distribution of remaining assets to
                    501(c)(3) organizations with similar objectives, in condensed language.
                  </li>
                  <li>
                    <strong>Transitional provisions added (Article XI):</strong> At least eight (8) currently serving EC
                    members shall step down by the 2028 selection cycle so up to four (4) members from the
                    Sub-Committees can join, bringing composition into compliance with Section 3.2. Term
                    limits and the cooling-off period apply to all members, with prior service considered by
                    the Election Committee.
                  </li>
                  <li>
                    <strong>Removed provisions:</strong> Membership dues and dues-setting authority, termination of
                    members by the Board without cause, the Director liability clause, and the standalone
                    &ldquo;Good Governance&rdquo; general article (now covered by Articles III, VI, and VIII).
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ByLaws;
