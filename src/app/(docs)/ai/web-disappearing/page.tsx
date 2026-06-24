import { Breadcrumb } from "@/components/layout/breadcrumb";

import {
  HardDrive,
  Network,
  Globe,
  Zap,
  Smartphone,
  MessageSquare,
  Search,
  Server,
  Lock,
  Quote,
  Newspaper,
} from "lucide-react";

const timeline = [
  {
    icon: HardDrive,
    era: "1990",
    label: "플로피 디스크",
    desc: "정보는 사람의 손을 통해 물리적으로 이동했다. 일주일에 20MB가 보물이던 시절.",
  },
  {
    icon: Network,
    era: "1995",
    label: "BBS",
    desc: "14.4kbps 모뎀으로 연결되던 작은 디지털 광장. '이게 미래다'라고 확신했지만 틀렸다.",
  },
  {
    icon: Globe,
    era: "1990s 말",
    label: "월드 와이드 웹",
    desc: "Netscape에서 첫 웹페이지가 뜨는 순간 모든 게 바뀌었다. 누구나 자기 사이트를 가졌다.",
  },
  {
    icon: Zap,
    era: "2000s 초",
    label: "Flash",
    desc: "화려했지만 아름다운 감옥이었다. 콘텐츠가 바이너리 안에 갇혀 검색되지 않았다.",
  },
  {
    icon: Smartphone,
    era: "2010s",
    label: "모바일 앱",
    desc: "iPhone이 Flash를 끝내고 웹을 되살렸지만, 앱이라는 새로운 담장을 세웠다.",
  },
  {
    icon: MessageSquare,
    era: "2022~",
    label: "AI 챗 인터페이스",
    desc: "검색하고 클릭하던 습관이 '물어보는' 습관으로 바뀐다. 인터페이스 자체가 바뀐다.",
  },
];

export default function WebDisappearingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "AI", href: "/ai" },
          { label: "우리가 아는 웹은 사라진다" },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ds-on-surface mb-4">
        우리가 아는 웹은 사라진다
      </h1>
      <p className="text-lg leading-relaxed text-ds-on-surface-variant mb-16">
        1990년부터 컴퓨팅의 모든 인터페이스 전환을 직접 겪은 Diego Lafuente가
        쓴 회고이자 예측. 플로피 디스크에서 BBS로, 웹으로, Flash로, 모바일 앱으로,
        그리고 이제 AI 챗으로. 웹은 하룻밤 사이에 사라지지 않지만,{" "}
        <strong>
          사람들이 검색하고 클릭하고 읽고 발행하던 그 열린 공간으로서의 웹
        </strong>
        은 더 편리하고 더 중앙화된 무언가로 이미 대체되고 있습니다.
      </p>

      {/* Hero Callout */}
      <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl mb-16">
        <p className="text-base font-semibold text-ds-on-surface">
          그릇은 바뀌어도, 갈망은 바뀌지 않는다.
        </p>
        <p className="text-sm text-ds-on-surface-variant mt-1">
          사람들은 언제나 답을, 연결을, 도구를, 편리함을 원했다. 인터페이스는
          바뀌고 행동은 남는다 &mdash; 웹은 실패해서가 아니라{" "}
          <strong>너무 완벽하게 성공한 나머지</strong> 그 콘텐츠가 다음 인터페이스로
          통째로 흡수되기 때문에 사라진다.
        </p>
      </div>

      {/* The Pattern: Timeline */}
      <section className="mb-16" id="pattern">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          인터페이스는 바뀌고, 행동은 남는다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          저자는 한 가지 패턴을 반복해서 목격했습니다. 매 세대는 자신이 사랑하는
          인터페이스가 영원할 거라 믿지만, 그런 일은 결코 없었습니다. 미래였던 것은
          BBS도, 웹도, Flash도 아니었습니다. 미래는 그 뒤에 있던{" "}
          <strong>행동</strong>이었습니다 &mdash; 연결하고, 발행하고, 교환하고,
          발견하려는 욕구. 컨테이너는 매번 바뀌었습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {timeline.map((item) => (
            <div key={item.label} className="bg-ds-surface-low p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-ds-primary/10 flex items-center justify-center rounded-lg shrink-0">
                  <item.icon className="w-5 h-5 text-ds-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em]">
                    {item.era}
                  </p>
                  <p className="text-sm font-bold text-ds-on-surface">
                    {item.label}
                  </p>
                </div>
              </div>
              <p className="text-sm text-ds-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why the Web won before */}
      <section className="mb-16" id="why-web-won">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          웹이 매번 살아남은 이유
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          웹은 세 번의 큰 도전을 모두 견뎠습니다. 그때마다 이긴 이유가 달랐습니다.
          그리고 그 이유들이 지금은 더 이상 유효하지 않다는 것이 이 글의 핵심
          긴장입니다.
        </p>

        <div className="space-y-3">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-sm font-bold text-ds-on-surface mb-1">
              vs BBS &mdash; 접근성으로 이겼다
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              웹은 닿기 쉽고, 링크하기 쉽고, 발행하기 쉬웠습니다. BBS는 거의 즉시
              구식이 되었습니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-sm font-bold text-ds-on-surface mb-1">
              vs Flash &mdash; 열린 표준이 결국 강해졌다
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              HTML · CSS · JS · Canvas · WebGL · WebAssembly가 진화하며 플러그인이
              필요했던 일을 열린 표준으로 해냈습니다. iPhone이 Flash를 거부하면서
              방향이 정해졌습니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <p className="text-sm font-bold text-ds-on-surface mb-1">
              vs 모바일 앱 &mdash; 링크 · 검색 · 발행이 여전히 필수였다
            </p>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              앱이 하루 종일 쓰는 인터페이스가 되었지만, 비즈니스는 여전히
              웹사이트가 필요했고 구글은 여전히 트래픽을 보냈습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI is different */}
      <section className="mb-16" id="ai-is-different">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          AI는 인터페이스 자체를 바꾼다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          이번 싸움은 다릅니다. 이전의 도전자들은 더 나은 <em>컨테이너</em>를
          제시했을 뿐입니다. AI는 지식에 접근하는{" "}
          <strong>방식 그 자체</strong>를 바꿉니다. 사람들은 더 이상 같은 방식으로
          검색하지 않습니다. 탭 열 개를 열 필요도, 기사 다섯 개를 훑을 필요도
          없습니다. 그냥 챗에 묻습니다.
        </p>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Quote className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            이것은 브라우저가{" "}
            <strong className="text-ds-on-surface">
              지식으로 가는 1차 인터페이스라는 자리
            </strong>
            를 잃는 것이다. 개발자는 에러를, 일반 사용자는 레시피와 여행 계획과
            건강 질문을 이제 구글이 아니라 AI에게 던진다.
          </p>
        </div>
      </section>

      {/* Search becomes intermediate layer */}
      <section className="mb-16" id="search-intermediate">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          검색은 중간 계층으로 밀려난다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          20년 넘게 검색 엔진은 웹의 현관문이었습니다. 검색하고 &rarr; 클릭하고
          &rarr; 웹사이트를 방문하는 흐름. 그 웹사이트는 트래픽과 광고 노출과 한
          명의 독자를 얻었습니다. AI 요약은 사용자가 클릭하기 <strong>전에</strong>{" "}
          답을 줍니다. 사용자에게는 편리하지만, 발행자에게는 공포입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-ds-primary" />
              <p className="text-sm font-bold text-ds-on-surface">
                사용자 관점 &mdash; 편리함
              </p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              답이 맨 위에 나타납니다. 출처가 인용될 수는 있지만, 방문하지 않아도
              충분한 정보를 얻습니다.
            </p>
          </div>
          <div className="bg-ds-surface-low p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Newspaper className="w-5 h-5 text-ds-primary" />
              <p className="text-sm font-bold text-ds-on-surface">
                발행자 관점 &mdash; 공포
              </p>
            </div>
            <p className="text-sm text-ds-on-surface-variant leading-relaxed">
              12시간 들여 쓴 답이 남의 인터페이스 안에서 깔끔한 두 문장으로
              요약됩니다. &ldquo;링크를 클릭한다&rdquo;는 습관이 끊깁니다.
            </p>
          </div>
        </div>

        <div className="bg-ds-surface-low p-6 rounded-2xl mt-4">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-2">
            경고탄: Stack Overflow
          </p>
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            한때 개발의 성역이었던 Stack Overflow. 이제 많은 개발자가 AI에게 먼저
            묻습니다. 답이 틀릴 때도 있지만 즉각적이고, 맥락을 이해하고, 대화가
            가능하며, 다운보팅으로 사람을 정신적 위기에 빠뜨리지 않습니다. 가치가
            사라진 게 아니라 <strong>습관이 바뀌었습니다</strong>. 습관이 바뀌면
            생태계 전체가 움직이기 시작합니다.
          </p>
        </div>
      </section>

      {/* Website becomes infrastructure */}
      <section className="mb-16" id="website-infrastructure">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          웹사이트는 목적지가 아니라 인프라가 된다
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          웹사이트가 완전히 사라지지는 않습니다. 사라지는 것은{" "}
          <strong>사람을 향한 1차 인터페이스로서의 웹</strong>입니다. 웹사이트는
          점점 기계를 위한 인프라가 됩니다 &mdash; 모델, 에이전트, 검색 시스템,
          API, 데이터셋, 크롤러를 먹이는. 사람은 덜 방문하지만 기계는 끊임없이
          소비합니다.
        </p>

        <div className="bg-ds-primary-container/20 border-l-4 border-ds-primary p-6 rounded-r-xl flex gap-3">
          <Server className="w-5 h-5 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            덜 &ldquo;와서 내 글을 읽어줘&rdquo;, 더 &ldquo;기계가 내 글을 삼키게
            하고 운 좋으면 언급되기를&rdquo;. 웹사이트는 목적지(destination)에서
            <strong className="text-ds-on-surface"> 소스(source)</strong>로
            바뀝니다. 그건 저자가 자라온 웹과는 매우 다른 웹입니다.
          </p>
        </div>
      </section>

      {/* New gatekeepers */}
      <section className="mb-16" id="gatekeepers">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          새로운 게이트키퍼, 사라지는 탈출로
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          옛 웹에도 게이트키퍼는 있었지만 <strong>탈출로</strong>도 있었습니다.
          구글이 랭킹하지 않아도 사람들이 링크를 공유할 수 있었고, 앱스토어가
          거부해도 웹사이트를 만들 수 있었습니다. AI 인터페이스는 그 탈출로를
          줄입니다. 사람들이 브라우징·검색·클릭을 멈추면, 가시성은 AI 시스템이 내
          콘텐츠를 중요하다고 판단하는지에 달립니다.
        </p>

        <div className="bg-ds-surface-low p-6 rounded-2xl flex gap-4 items-start">
          <Lock className="w-6 h-6 text-ds-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            옛 웹에서는 &ldquo;왜 내 페이지가 랭킹이 안 되지?&rdquo;라고 물을 수
            있었습니다. AI 웹에서는{" "}
            <strong className="text-ds-on-surface">
              &ldquo;왜 모델이 나를 언급하지 않지?&rdquo;
            </strong>
            라고 물어야 합니다. 그 결정은 랭킹·검색(retrieval)·학습·라이선스
            계약·안전 필터·개인화 시스템 안에 숨어 있습니다. 디버깅을 빌어요.
          </p>
        </div>
      </section>

      {/* Convenience wins (conclusion) */}
      <section className="mb-16" id="convenience-wins">
        <h2 className="text-2xl font-bold tracking-tight text-ds-on-surface mb-4">
          결국 이기는 것은 편리함 &mdash; 그리고 다시 너드의 매체로
        </h2>
        <p className="text-base leading-relaxed text-ds-on-surface-variant mb-8">
          사람들은 &ldquo;오늘부터 열린 웹을 거부하겠다&rdquo;고 선언하지
          않습니다. 그냥 더 빠르니까 어시스턴트에게 묻습니다. 웹의 가장 큰 적은
          이념도, 규제도, AI 자체도 아닙니다. <strong>편리함</strong>입니다.
          편리함은 거의 항상 이깁니다.
        </p>

        <div className="bg-ds-primary-container/30 border-l-4 border-ds-primary p-6 rounded-r-xl">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-ds-primary" />
            <p className="text-base font-semibold text-ds-on-surface">
              웹은 죽지 않는다. 다만 작아진다.
            </p>
          </div>
          <p className="text-sm text-ds-on-surface-variant leading-relaxed">
            웹은 IRC·FTP·Gopher·BBS처럼 될지도 모릅니다. 죽은 게 아니라, 그저 더
            작아진. 애호가·아키비스트·개발자·연구자·독립 작가·괴짜들이 쓰는 곳.
            주류 인터페이스는 챗 박스나 음성 어시스턴트나 에이전트가 됩니다. 그
            뒤에 모델, 그 뒤에 도구, 그 뒤에 API, 그 뒤에 어쩌면 웹사이트, 그
            뒤에 새벽 1시에 문서를 쓰는 지친 사람들.{" "}
            <strong className="text-ds-on-surface">
              저자는 슬프지 않다고 말합니다.
            </strong>{" "}
            또 하나의 거대한 전환을 목격하고 있을 뿐이라고. 컨테이너는 바뀌고,
            갈망은 남으니까요.
          </p>
        </div>
      </section>

      {/* Source */}
      <section className="mb-16" id="source">
        <div className="bg-ds-surface-low p-6 rounded-2xl">
          <p className="text-xs font-bold text-ds-secondary uppercase tracking-[0.15em] mb-3">
            Source
          </p>
          <a
            href="https://www.minid.net/2026/6/15/the-web-is-going-to-dissapear"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#0f172a]/10 flex items-center justify-center rounded-lg shrink-0">
              <Newspaper className="w-5 h-5 text-[#0f172a] dark:text-ds-on-surface" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ds-on-surface group-hover:text-ds-primary transition-colors">
                The Web We Know Is Going to Disappear
              </p>
              <p className="text-xs text-ds-on-surface-variant">
                Diego Lafuente | minid.net
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
