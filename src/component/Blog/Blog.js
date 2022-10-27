import React from 'react';

const Blog = () => {
    return (
      <div className="w-4/5 mx-auto my-9">
        <div className="border-2 border-cyan-600 rounded-2xl p-4 mb-5">
          <h3 className="text-3xl font-semibold text-gray-700 text-center">
            What is cors?
          </h3>
          <p className="text-gary-700">
            <span className="font-semibold">
              Cross-origin resource sharing (CORS)
            </span>{" "}
            is a mechanism that allows restricted resources on a web page to be
            requested from another domain outside the domain from which the
            first resource was served
          </p>
          <p className="text-gary-700">
            A web page may freely embed cross-origin images, stylesheets,
            scripts, iframes, and videos.[2] Certain "cross-domain" requests,
            notably Ajax requests, are forbidden by default by the same-origin
            security policy. CORS defines a way in which a browser and server
            can interact to determine whether it is safe to allow the
            cross-origin request.[3] It allows for more freedom and
            functionality than purely same-origin requests, but is more secure
            than simply allowing all cross-origin requests.
          </p>
        </div>

        <div className="border-2 border-cyan-600 rounded-2xl p-4 mb-5">
          <h3 className="text-3xl font-semibold text-gray-700 text-center">
            why are you using firebase? what other options do you have to
            implement authentication!
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <h5 className="text-xl font-semibold mb-3">
                Easy sign-in with any platform
              </h5>
              <p className="text-gary-700">
                Firebase Authentication aims to make building secure
                authentication systems easy, while improving the sign-in and
                onboarding experience for end users. It provides an end-to-end
                identity solution, supporting email and password accounts, phone
                auth, and Google, Twitter, Facebook, and GitHub login, and more.
              </p>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-3">
                Flexible, drop-in UI
              </h5>
              <p className="text-gary-700">
                Firebase Authentication aims to make building secure
                authentication systems easy, while improving the sign-in and
                onboarding experience for end users. It provides an end-to-end
                identity solution, supporting email and password accounts, phone
                auth, and Google, Twitter, Facebook, and GitHub login, and more.
              </p>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-3">
                Comprehensive security
              </h5>
              <p className="text-gary-700">
                Built by the same team that developed Google Sign-in, Smart Lock
                and Chrome Password Manager, Firebase security applies Google's
                internal expertise of managing one of the largest account
                databases in the world.
              </p>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-3">
                Fast implementation
              </h5>
              <p className="text-gary-700">
                BIt can take months to set up your own auth system, and it
                requires an engineering team to maintain that system in the
                future. Set up the entire authentication system of your app in
                under 10 lines of code, even handling complex cases like account
                merging.
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 border-cyan-600 rounded-2xl p-4 mb-5">
          <h3 className="text-3xl font-semibold text-gray-700 text-center">
            How does the privet router work?
          </h3>
          <p className="text-gary-700">
            The react private route component
            <span className="font-semibold">
              renders child components ( children ) if the user is logged in.
            </span>
            If not logged in the user is redirected to the /login page with the
            return url passed in the location state property
          </p>
        </div>
        <div className="border-2 border-cyan-600 rounded-2xl p-4 mb-5">
          <h3 className="text-3xl font-semibold text-gray-700 text-center">
            What is node? How does node word?
          </h3>
          <p className="text-gary-700">
            A node is
            <span className="font-semibold">
              a point, especially in the form of lump or swelling, where one
              thing joins another.
            </span>
            Cut them off cleanly through the stem just below the node. ... nerve
            nodes. Synonyms: nodule, growth, swelling, knot More Synonyms of
            node.
          </p>
        </div>
      </div>
    );
};

export default Blog;