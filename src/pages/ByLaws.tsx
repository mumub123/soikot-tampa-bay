import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ByLaws = () => {
  return (
    <div className="font-bengali">
      <div className="pointer-events-none opacity-50">
        <Navbar />
      </div>
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-bengali-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center text-bengali-red hover:text-bengali-red/80 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="prose prose-lg max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark mb-2"><span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Soikot By-Laws</span></h1>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">ARTICLE I</h2>
                <h3 className="text-xl font-bold text-bengali-dark mb-4">PURPOSE</h3>
                <p className="mb-6">
                  The purpose of the Association, formed as a Not for Profit corporation under Florida
                  Statutes 617, is to afford opportunities for its members to:
                </p>
                <ol className="list-alpha mb-6 pl-6 space-y-4">
                  <li className="pl-4">• Worship and celebrate Bengali religious festivals such as Durga Puja, Saraswati Puja and other Hindu religious events,</li>
                  <li className="pl-4">• Express their creativity and appreciation of literature, poetry, drama, music and other media in the Bengali language, including publication of a literary magazine and maintaining a library,</li>
                  <li className="pl-4">• Learn written and spoken Bengali, particularly for children, as well as the history, cultural values and traditions of Bengal, collect and disseminate learning materials, and</li>
                  <li className="pl-4">• Contribute towards the general uplift of the lives of the impoverished people of Bengal, other Bengali/Indian communities all over the world and provide humanitarian assistance in case of need.</li>
                </ol>
                <p className="mb-6">
                  In view of the exclusively religious, literary, educational, charitable and social purpose of
                  the Association, it shall comply with the stipulations in Section 501(c)(3) of the Internal
                  Revenue Code, as may be amended, by undertaking only those activities that are
                  permitted in that section of the Code, ensuring that no part of its net earnings inures to
                  the benefit of any private individual, no substantial part of its activities involves carrying
                  on propaganda, or otherwise attempts, to influence legislation (except as otherwise
                  provided in the Internal Revenue Code), and it shall not participate in, or intervene in
                  (including the publishing or distributing of statements), any political campaign on behalf
                  of (or in opposition to) any candidate for public office.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">ARTICLE II</h2>
                <h3 className="text-xl font-bold text-bengali-dark mb-4">MEMBERS</h3>
                <p className="mb-6">
                  The Association shall be a membership corporation, and rely primarily on membership
                  dues, fees and donations from its members and others to finance its activities. Payment
                  of such dues, fees and donations shall not constitute equity or ownership interest in the
                  corporation and shall not be refundable even if the Association is dissolved.
                </p>
                <ol className="list-decimal mb-6 pl-6 space-y-4">
                  <li className="pl-4">
                    <strong>Eligibility of Members:</strong> All individuals and entities, who are interested in
                    participating in the activities of the Association, may become members of the
                    Association, provided the Board of Directors approves their application for
                    membership.
                  </li>
                  <li className="pl-4">
                    <strong>Categories of Membership/Voting rights:</strong>
                    <div className="overflow-x-auto mt-4">
                      <table className="w-full mb-4 border-collapse">
                        <thead>
                          <tr className="bg-bengali-light">
                            <th className="py-3 px-4 text-left border-b border-bengali-red">Category</th>
                            <th className="py-3 px-4 text-left border-b border-bengali-red">Voting Rights</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4">Family Voting</td>
                            <td className="py-3 px-4">Only husband and wife will have voting rights</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4">Individual Voting</td>
                            <td className="py-3 px-4">One vote</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4">Student Voting</td>
                            <td className="py-3 px-4">One vote</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Patron Non-voting</td>
                            <td className="py-3 px-4">No voting rights</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-4">
                      Voting rights and privileges to hold elective office shall be limited to those members
                      whose membership is in good standing. All voting members shall pay membership
                      dues. Members who have not paid their dues in full may have their voting rights and
                      other privileges suspended until the arrears are paid.
                    </p>
                  </li>
                  <li className="pl-4">
                    <strong>Termination of Member:</strong> Members, whose continued membership is contrary to
                    the best interests of the Association in the collective judgment of the Board of
                    Directors, may be removed from the membership roll without assigning any reason.
                    The member shall, however, be afforded an opportunity to submit in writing such
                    comments or defense as the member desires to the Board of Directors, who may
                    reinstate the membership.
                  </li>
                  <li className="pl-4">
                    <strong>Membership Dues:</strong> The Board of Directors shall determine the membership dues
                    and fees to be paid by various categories of members every year.
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">ARTICLE III</h2>
                <h3 className="text-xl font-bold text-bengali-dark mb-4">BOARD OF DIRECTORS</h3>
                <ol className="list-alpha mb-6 pl-6">
                  <li className="mb-4">
                    <strong>Board of Directors:</strong> A Board of Directors, or Executive Committee, comprising
                    of at least three (3) and up to nine (9) elected Directors, shall exercise overall
                    control over the Association. The Directors shall be elected by members at a
                    general body meeting for a term of two (2) years. The members may also
                    designate individual Directors to serve as the President, two (2) Vice Presidents,
                    two (2) Secretaries, two (2) Treasurers and two (2) Program Coordinators. In
                    case of a vacancy in the Board except when a Director is removed, the Directors,
                    by a majority vote may elect a member of the Association to serve as Director
                    until the next election.
                  </li>
                  <li className="mb-4">
                    <strong>Duties and responsibilities of the Directors also designated as Officers</strong> shall
                    be as indicated below; wherever there are two incumbents, the responsibilities
                    shall be shared in a manner specified by the Board at its first meeting following
                    the elections; the decisions taken shall be duly recorded in the minutes so that
                    there is no ambiguity about specific responsibilities relating to the timely
                    preparation and submission of all mandatory returns and reports to various
                    government agencies:
                    <div className="mt-4 pl-4">
                      <p className="mb-4">
                        <strong>President:</strong> Presiding over general body and other meetings, coordinating all
                        activities of the Association in consultation with Board of Directors, representing
                        the Association at all public forums, appointing non-permanent Sub-
                        Committee(s) for specific tasks, and assigning additional duties to other
                        members of the Board. The President shall be the only individual Officer
                        authorized to execute an agreement binding on the Association, provided the
                        agreement, in its entirety, was discussed by the Board and duly budgeted for. No
                        other Director shall be so empowered except with the specific approval of the
                        Board.
                      </p>
                      <p className="mb-4">
                        <strong>Vice-Presidents:</strong> Jointly discharging the duties of the President during the
                        latter's absence as decided by the Board and performing such other duties as
                        may be assigned by the President from time to time.
                      </p>
                      <p className="mb-4">
                        <strong>Secretaries:</strong> Jointly responsible for maintaining all records, except financial, of
                        the Association including maintenance of membership book, filing of mandatory
                        local/state/federal government returns and reports, issuance and recording of all
                        notices/agenda/minutes for all meetings, and perform such other duties as may
                        be assigned by the President from time to time.
                      </p>
                      <p className="mb-4">
                        <strong>Treasurers:</strong> Jointly responsible for all financial affairs of the Association,
                        including preparation of annual budgets, recording and tracking
                        receipts/expenditures/payables/receivables, management of the bank accounts,
                        and if required the preparation and filing of tax/information returns jointly with the
                        Secretaries, as well as perform such other duties as may be assigned by the
                        President from time to time.
                      </p>
                      <p className="mb-4">
                        <strong>Program Coordinators:</strong> Jointly responsible for planning and organizing all
                        events of the Association and perform such other duties as may be assigned by
                        the President from time to time.
                      </p>
                    </div>
                  </li>
                  <li className="mb-4">
                    <strong>Duties and responsibilities of the Directors,</strong> in the event it is decided not to
                    designate individual Directors also as Officers; all the Directors will have equal
                    powers and share all responsibilities jointly, and all decisions will be taken
                    collectively by a majority vote of the Directors. While the Executive Committee
                    may assign individual Directors specific duties and responsibilities, no individual
                    Director shall be authorized to execute an agreement binding on the Association
                    or represent the Association as a whole or purport to speak on behalf of the
                    Association, unless expressly authorized to so.
                  </li>
                  <li className="mb-4">
                    <strong>Removal of Directors:</strong> A Director, whose continuance in office is contrary to the
                    best interests of the Association in the judgment of the President or two other
                    Directors, may be removed from office by a vote of the general members of the
                    Association at a special or regularly scheduled General Body meeting without
                    assigning any reason. The member shall, however, be afforded an opportunity to
                    submit in writing such comments or defense as the member desires. The Director
                    shall be relieved of all duties until a vote is taken. In case the members vote to
                    remove the Director, they shall also elect a replacement at the same meeting.
                  </li>
                  <li className="mb-4">
                    <strong>Liability:</strong> The Directors shall be absolved of all personal liabilities arising from
                    the acts of the Board of Directors or Executive Committee, vote or decision
                    regarding organizational management or policy unless they breach or fail to
                    perform their duties.
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">ARTICLE IV</h2>
                <h3 className="text-xl font-bold text-bengali-dark mb-4">MEETINGS</h3>
                <ol className="list-decimal mb-6 pl-6">
                  <li className="mb-4">
                    A General Body Meeting open to all members of the Association shall be held
                    at least once every two (2) years to elect up to nine (9) members of the Board of
                    Directors, and may also designate amongst the Directors - a President, two (2)
                    Vice Presidents, two (2) Secretaries, two (2) Treasurers and two (2) Program
                    Coordinators, review the financial and other reports, amend any provision of the
                    bylaws or act on any other matter which the Board of Directors is not empowered
                    to do. On being directed by the President or at the request of two other Directors,
                    the Secretary or the specifically designated Director shall by mail, separately or
                    in the newsletter, email or telephone, notify the members at least two (2) weeks
                    prior to the day of a General Body Meeting. Unless there are extenuating
                    circumstances, the biennial General Body Meeting for conducting elections shall
                    be held on the day of Durga Puja celebration to maximize attendance. A special
                    General Body Meeting may be held at any time. A majority of members shall
                    constitute a quorum for purpose of conducting the general body meeting of the
                    Association.
                  </li>
                  <li className="mb-4">
                    The Board of Directors shall meet at least four (4) times a year at the call of the
                    President or two or more members of the Board of Directors. A simple majority of
                    its members shall constitute a quorum for the transaction of business. The Board
                    of Directors may participate in regular or special meetings by, or conduct the
                    meeting through, the use of any means of convenient communication with one
                    another such as telephone conference calls, instant messaging, video
                    conferencing, and valid e-mail communication provided all the Directors agree.
                    The Board of Directors can also act without a meeting, if the action is unanimous
                    and done in writing, and signed by all Directors. No mandatory prior notice of
                    such meetings shall be required. All Directors shall inform the Secretary, or other
                    Directors if no Secretary is designated, if they are unable to participate in the
                    deliberations of the Board for an extended period.
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">ARTICLE V</h2>
                <h3 className="text-xl font-bold text-bengali-dark mb-4">AMENDMENTS</h3>
                <p className="mb-6">
                  The Board of Directors or Executive Committee may amend these bylaws, except
                  Articles I, III (a) and (c), and VII. Any member may initiate the amendment. Any
                  amendment to Articles I, III (a) and (c), and VII shall have to be approved at a General
                  Body Meeting by a two-thirds majority.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">ARTICLE VI</h2>
                <h3 className="text-xl font-bold text-bengali-dark mb-4">GENERAL</h3>
                <ol className="list-decimal mb-6 pl-6">
                  <li className="mb-4">
                    The Fiscal Year of the Association shall be the calendar year, beginning January
                    1.
                  </li>
                  <li className="mb-4">
                    <strong>Good Governance:</strong> The Board of Directors shall implement good corporate
                    governance procedures for nominations of Directors, prudent handling and
                    management of all monies received by the Association and the expenditures
                    thereof, rules of procedures for all deliberations of the Association, avoidance of
                    conflicts of interest for Directors, full and complete disclosure about the activities
                    of the Association, providing members access to records and materials belonging
                    to the Association, and other measures to minimize conflicts/disputes amongst
                    members and avoid adverse legal consequences in the future.
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-bengali-red">
                <h2 className="text-2xl font-bold text-bengali-dark mb-4">ARTICLE VII</h2>
                <h3 className="text-xl font-bold text-bengali-dark mb-4">DISPOSITION OF ASSETS UPON DISSOLUTION</h3>
                <p className="mb-6">
                  In the event that further continuance of the Association is no longer sustainable, upon
                  dissolution and the payment or adequate discharge of all liabilities and obligations, the
                  remaining assets of the Association shall be distributed for one or more exempt
                  purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code, as may
                  be amended, to other organizations with a similar purpose as specified in Article I.
                </p>
              </div>

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
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold">Revision 4</td>
                        <td className="py-3 px-4">10/9/11</td>
                        <td className="py-3 px-4">Increased number of Directors from Nine (9) to Eleven (11)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="pointer-events-none opacity-50">
        <Footer />
      </div>
    </div>
  );
};

export default ByLaws; 