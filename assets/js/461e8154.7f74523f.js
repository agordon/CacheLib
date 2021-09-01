"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6952],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,p=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(p,o(o({ref:t},d),{},{components:n})):a.createElement(p,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"chained_items",title:"Chained items"},s=void 0,l={unversionedId:"Cache_Library_User_Guides/chained_items",id:"Cache_Library_User_Guides/chained_items",isDocsHomePage:!1,title:"Chained items",description:"The allocate() method allocates memory for data whose size is less than the maximum slab size (4 MB). To cache data whose size exceeds 4 MB, use chained allocations.",source:"@site/docs/Cache_Library_User_Guides/chained_items.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/chained_items",permalink:"/docs/Cache_Library_User_Guides/chained_items",editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/Cache_Library_User_Guides/chained_items.md",version:"current",frontMatter:{id:"chained_items",title:"Chained items"},sidebar:"someSidebar",previous:{title:"Configure HybridCache",permalink:"/docs/Cache_Library_User_Guides/Configure_HybridCache"},next:{title:"Compact cache",permalink:"/docs/Cache_Library_User_Guides/compact_cache"}},d=[{value:"Chained allocations",id:"chained-allocations",children:[]},{value:"Insertion Order and Read Order",id:"insertion-order-and-read-order",children:[]},{value:"Example: A custom data structure with a large data blob.",id:"example-a-custom-data-structure-with-a-large-data-blob",children:[]}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"allocate()")," method allocates memory for data whose size is less than the maximum slab size (4 MB). To cache data whose size exceeds 4 MB, use chained allocations.\nYou can also use chained allocations to extend your data's size."),(0,i.kt)("h2",{id:"chained-allocations"},"Chained allocations"),(0,i.kt)("p",null,"When you call the the ",(0,i.kt)("inlineCode",{parentName:"p"},"allocate()")," method to allocate memory for your data, your data's size must be less than the maximum slab size (4 MB):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename CacheTrait>;\nclass CacheAllocator : public CacheBase {\n  public:\n    // Allocate memory of a specific size from cache.\n    ItemHandle allocate(\n      PoolId id,\n      Key key,\n      uint32_t size,\n      uint32_t ttlSecs = 0,\n      uint32_t creationTime = 0,\n    );\n  // ...\n};\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'string data("Hello world");\n\n// Allocate memory for the data.\nauto item_handle = cache->allocate(pool_id, "key1", data.size());\n')),(0,i.kt)("p",null,"The allocated memory can't be changed at runtime. To extend this memory, use chained allocations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"allocate()")," method to allocate memory (< 4 MB) for an item (the parent item)."),(0,i.kt)("li",{parentName:"ol"},"Add chained items to the parent item. Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"allocateChainedItem()")," method to allocate memory for these chained items. A chained item doesn't have a key; thus you must use its parent item to access it.")),(0,i.kt)("p",null,"The following is the declaration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"allocateChainedItem()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename CacheTrait>;\nclass CacheAllocator : public CacheBase {\n  public:\n    ItemHandle allocateChainedItem(const ItemHandle& parent, uint32_t size);\n  // ...\n};\n")),(0,i.kt)("h2",{id:"insertion-order-and-read-order"},"Insertion Order and Read Order"),(0,i.kt)("p",null,"Chained items are inserted in LIFO order. When user reads through the chained item using the ChainedAllocs API. The iteration happens in LIFO order starting with the most recently inserted chained item until the chained item inserted first. When user uses ",(0,i.kt)("inlineCode",{parentName:"p"},"convertToIOBuf")," API, it is in FIFO order starting with the parent, and end with the most recently inserted chained item."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'auto parent = cache->allocate(0, "test key", 0);\nfor (int i = 0; i < 3; i++) {\n  auto child = cache->allocateChainedItem(parent, sizeof(int));\n  *reinterpret_cast<int*>(child->getMemory()) = i;\n  cache->addChainedItem(std::move(child));\n}\n\nauto chainedAllocs = cache->viewAsChainedAllocs(parent);\nfor (const auto& c : chainedAllocs.getChain()) {}\n// 3 -> 2 -> 1\n\nauto iobuf = cache->convertToIOBuf(std::move(parent));\n// parent -> 1 -> 2 -> 3\n')),(0,i.kt)("h2",{id:"example-a-custom-data-structure-with-a-large-data-blob"},"Example: A custom data structure with a large data blob."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'struct LargeUserData {\n  uint64_t version;\n  uint64_t timestamp;\n  size_t length;\n  int[] data;\n};\n\nstd::unique_ptr<LargeUserData> userData = getLargeUserData();\n\nsize_t userDataSize = sizeof(LargeUserData) + sizeof(int) * userData->length;\n\n// For simplicity, we\'ll split the user data into 1MB chunks\nsize_t numChunks = userDataSize / (1024 * 1024 * 1024);\n\nstruct CustomParentItem {\n  size_t numChunks;\n  void* dataPtr[];  // an array of pointers to the chunks\n};\n\nsize_t parentItemSize = sizeof(CustomParentItem) + numChunks * sizeof(void*);\n\n// for simplicity, assume this fits into 1MB\nassert(parentItemSize <(1024 * 1024));\n\nauto parentItemHandle =\n    cache.allocate(defaultPool, "an item split into chunks", parentItemSize);\n\nCustomParentItem* parentItem =\n    reinterpret_cast<CustomParentItem*>(parentItemHandle->getMemory());\n\n// Now split user data into chunks and cache them\nfor (size_t i = 0; i < numChunks; ++i) {\n  size_t chunkSize = 1024 * 1024;\n  auto chainedItemHandle =\n      cache.allocateChainedItem(parentItemHandle, chunkSize);\n\n  // For simplicity, assume we always have enough memory\n  assert(chainedItemHandle != nullptr);\n\n  // Compute user data offset and copy data over\n  uint8_t* dataOffset =\n      reinterpret_cast<uint8_t*>(userData->data) + chunkSize * i;\n  std::memcpy(chainedItemHandle->getMemory(), dataOffset, chunkSize);\n\n  // Add this chained item to the parent item\n  cache.addChainedItem(parentItemHandle, std::move(chainedItemHandle));\n}\n\n// Now, make parent item visible to others\ncache.insert(parentItemHandle);\n')))}u.isMDXComponent=!0}}]);