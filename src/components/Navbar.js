import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
            <header className="text-gray-100 body-font bg-black bg-opacity-90">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="#_" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <span className="ml-3 text-3xl font-bold">TailComp</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a href="#_" className="mr-5 hover:text-white">First Link</a>
        <a href="#_" className="mr-5 hover:text-white">Second Link</a>
        <a href="#_" className="mr-5 hover:text-white">Third Link</a>
        <a href="#_" className="mr-5 hover:text-white">Fourth Link</a>
      </nav>
      <button className="inline-flex items-center  px-8 py-4 text-base font-bold leading-6 text-white bg-blue-700 shadow-2xl border border-transparent md:w-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded mt-4 md:mt-0">Signup
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-3" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
  <section className="w-full px-6 antialiased bg-black bg-opacity-90">
    <div className="mx-auto max-w-7xl">
      <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span className="inline md:block">
            Lorem Ipsum is simply
          </span>
          <span className="relative mt-2 mb-2 md:inline-block">
            dummy text of the printing
          </span>
        </h1>
        <div className="mx-auto mt-5 text-lg text-gray-100 md:mt-12 md:max-w-2xl md:text-center lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lectus tellus, vitae pharetra felis fringilla quis. Sed lacinia volutpat eros non bibendum. Proin tempor, urna at varius pretium, odio urna convallis lorem, in facilisis nibh arcu ut eros. Quisque ut mauris nec elit cursus pharetra.</div>
        <div className="flex flex-col items-center mt-12 text-center"> <span className="relative inline-flex w-full md:w-auto">
            <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-700 shadow-2xl border border-transparent md:w-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded">
              Purchase Now
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
  <section className="body-font bg-black bg-opacity-90 text-gray-100">
    <div className="container px-8 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div className="w-full sm:p-4 px-4 mb-6">
          <h1 className="mb-12 mt-4 font-bold tracking-tight text-left title-font text-4xl text-white tracking-tigh">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <div className="leading-relaxed tracking-tight sm:text-2xl text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lectus tellus, vitae pharetra felis fringilla quis. Sed lacinia volutpat eros non bibendum. Proin tempor, urna at varius pretium, odio urna convallis lorem, in facilisis nibh arcu ut eros. Quisque ut mauris nec elit cursus pharetra.</div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
          <h2 className="title-font font-bold text-3xl text-green-400">
            2.7K +
          </h2>
          <p className="leading-relaxed">Users</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
          <h2 className="title-font font-bold text-3xl text-red-500">
            1.8K +
          </h2>
          <p className="leading-relaxed">Subscribes</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
          <h2 className="title-font font-bold text-3xl text-blue-600">
            35+ 
          </h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
        <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1611095973362-88e8e2557e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="stats" />
      </div>
    </div>
  </section>
  <section className="text-white body-font py-4 px-2 bg-black bg-opacity-90">
    <div className="container flex flex-col items-center px-5 py-12 mx-auto md:flex-row lg:px-8 bg-gradient-to-bl from-black to-gray-900 rounded shadow-2xl mb-12">
      <div className="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0">
        <h1 className="mb-12 mt-4 font-bold tracking-tight text-left title-font text-4xl text-white tracking-tigh">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-white bg-blue-700 shadow rounded p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-2xl font-bold text-gray-100 title-font">
                Lorem ipsum
              </h2>
              <p className="text-base leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> <a href="#_" className="inline-flex items-center text-blue-300 md:mb-2 lg:mb-0 hover:text-blue-400">
                Learn More
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-white bg-blue-700 shadow rounded p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-2xl text-gray-100 title-font font-bold">
                Lorem ipsum
              </h2>
              <p className="text-base leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> <a href="/" className="inline-flex items-center  text-blue-300 md:mb-2 lg:mb-0 hover:text-blue-400">
                Learn More
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
        <img className="object-cover object-center rounded-lg" alt="hero" src="https://ik.imagekit.io/vpa3fwqdnd/landing_M8HwGW8CO.svg" />
      </div>
    </div>
  </section>
  <section className="text-white body-font bg-black bg-opacity-90">
    <div className="container px-5 pb-12 pt-12 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full bg-gradient-to-bl from-black to-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400/#23145" alt="blog" />
            <div className="p-6">
              <h1 className="title-font text-2xl font-medium text-white mb-3">
                Lorem Ipsum
              </h1>
              <p className="leading-relaxed mb-3">Lorem Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.Learn More</p>
              <div className="flex items-center flex-wrap"> <a href="#_" className="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-blue-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full bg-gradient-to-bl from-black to-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400/#23145" alt="blog" />
            <div className="p-6">
              <h1 className="title-font text-2xl font-medium text-white mb-3">
                Lorem Ipsum
              </h1>
              <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.Learn More</p>
              <div className="flex items-center flex-wrap"> <a href="#_" className="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-blue-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full bg-gradient-to-bl from-black to-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400/#23145" alt="blog" />
            <div className="p-6">
              <h1 className="title-font text-2xl font-medium text-white mb-3">
                Lorem Ipsum
              </h1>
              <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.Learn More</p>
              <div className="flex items-center flex-wrap"> <a href="#_" className="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-blue-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="py-12 text-white bg-gradient-to-bl from-black to-gray-900">
    <div className="max-w-6xl m-auto flex flex-wrap justify-left">
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-100 font-medium mb-6">
          Introduction
        </div>
        <a href="#_" className="my-3 block">
          First Intro
        </a>
        <a href="#_" className="my-3 block">
          Second intro
        </a>
        <a href="#_" className="my-3 block">
          Third Intro
        </a>
        <a href="#_" className="my-3 block">
          Fourth Intro
        </a>
        <a href="#_" className="my-3 block">
          Fifth Intro
        </a>
        <a href="#_" className="my-3 block">
          Sixth Intro
        </a>
        <a href="#_" className="my-3 block">
          Seventh Intro
        </a>
      </div>
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-100 font-medium mb-6">
          Services
        </div>
        <a href="#_" className="my-3 block">
          List 1
        </a>
        <a href="#_" className="my-3 block">
          List 2
        </a>
        <a href="#_" className="my-3 block">
          List 3
        </a>
        <a href="#_" className="my-3 block">
          List 4
        </a>
        <a href="#_" className="my-3 block">
          List 5
        </a>
        <a href="#_" className="my-3 block">
          List 6
        </a>
        <a href="#_" className="my-3 block">
          List 7
        </a>
      </div>
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-100 font-medium mb-6">
          Content
        </div>
        <a href="#_" className="my-3 block">
          Content 1
        </a>
        <a href="#_" className="my-3 block">
          Content 2
        </a>
        <a href="#_" className="my-3 block">
          Content 3
        </a>
        <a href="#_" className="my-3 block">
          Content 4
        </a>
        <a href="#_" className="my-3 block">
          Content 5
        </a>
        <a href="#_" className="my-3 block">
          Content 6
        </a>
        <a href="#_" className="my-3 block">
          Content 7
        </a>
      </div>
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-100 font-medium mb-6">
          Job center
        </div>
        <a href="#_" className="my-3 block">
          Job 1
        </a>
        <a href="#_" className="my-3 block">
          Job2
        </a>
        <a href="#_" className="my-3 block">
          job 3
        </a>
        <a href="#_" className="my-3 block">
          Job 4
        </a>
        <a href="#_" className="my-3 block">
          Job 1
        </a>
        <a href="#_" className="my-3 block">
          Job2
        </a>
        <a href="#_" className="my-3 block">
          job 3
        </a>
      </div>
    </div>
    <div className="pt-2">
      <div className="flex pb-5 px-3 m-auto pt-5 text-sm 
  flex-col md:flex-row max-w-6xl text-center justify-center">
        <div className="mt-2">
          © Copyright 2021-year. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
      </div>
        )
    }
}

export default Navbar
