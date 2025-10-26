export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HamStory에 오신 것을 환영합니다!
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              시작하기
            </h2>
            <p className="text-gray-600 mb-6">
              이곳에서 새로운 이야기를 시작해보세요. 
              다양한 기능과 도구를 통해 창의적인 작업을 할 수 있습니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">기능 1</h3>
                <p className="text-blue-600 text-sm">
                  첫 번째 주요 기능에 대한 설명
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">기능 2</h3>
                <p className="text-green-600 text-sm">
                  두 번째 주요 기능에 대한 설명
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
