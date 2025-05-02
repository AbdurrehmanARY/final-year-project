import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer className="bg-white py-12 px-4 md:px-8 border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="font-semibold text-xl">LUX</div>
            </div>
            <p className="text-base  text-[#525252] mb-4">
            Finding your fashion has never been easier. Browse the best selection of famous fashion brands that suit your style and preferences.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-normal text-2xl font-helvetica  mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-600 hover:text-gray-900">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-normal text-2xl font-helvetica mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className=" mb-4 font-normal text-2xl font-helvetica">Payment Method </h3>
            <div className="flex space-x-3">
            <div className=" p-4 bg-transparent rounded flex justify-center items-center border border-[#F5F5F5] ">
                <img src="/images/master.png" alt="" />
              </div>

              <div className=" p-4 bg-transparent rounded flex justify-center items-center border border-[#F5F5F5] ">
                <img src="/images/paypall.png" alt="" />
              </div>

              <div className=" p-4 bg-transparent rounded flex justify-center items-center border border-[#F5F5F5] ">
                <img src="/images/visa.png" alt="" />
              </div>
              
              
              
              <div className=" p-4 bg-transparent rounded flex justify-center items-center border border-[#F5F5F5] ">
                <img src="/images/XMLID_34_.png" alt="" />
              </div>
             
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600 pt-8 border-t">© 2023 LUX Fashion. All rights reserved.</div>
      </footer>
    </>
  )
}

export default Footer