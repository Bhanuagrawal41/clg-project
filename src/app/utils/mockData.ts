export const mockPlan = {
  id: "plan-123",
  subject: "Data Structures & Algorithms",
  strategy: "Crash course focused on high-weight topics. Prioritizing trees, graphs, and dynamic programming based on previous exam trends. Active recall via spaced repetition.",
  study_method: "Pomodoro (50/10) with active recall testing at the end of each session.",
  priority_topics: ["Binary Search Trees", "Graph Traversal (BFS/DFS)", "Dynamic Programming (Knapsack)", "Hash Tables"],
  days_left: 5,
  hours_per_day: 6,
  day_wise_plan: [
    {
      day: 1,
      date: "Today",
      topics: ["Arrays & Strings", "Linked Lists"],
      hours: 6,
      tasks: [
        "Review two-pointer techniques (1.5h)",
        "Implement basic linked list operations (1.5h)",
        "Solve 5 Easy, 2 Medium LeetCode problems (3h)"
      ]
    },
    {
      day: 2,
      date: "Tomorrow",
      topics: ["Stacks & Queues", "Trees (Basics)"],
      hours: 6,
      tasks: [
        "Review stack/queue implementations (1h)",
        "Tree traversals (In, Pre, Post) (2h)",
        "Solve valid parentheses & lowest common ancestor (3h)"
      ]
    },
    {
      day: 3,
      date: "Day 3",
      topics: ["Advanced Trees", "Graphs"],
      hours: 6,
      tasks: [
        "Binary Search Tree properties (2h)",
        "Graph representations and BFS/DFS (2.5h)",
        "Practice cycle detection (1.5h)"
      ]
    },
    {
      day: 4,
      date: "Day 4",
      topics: ["Dynamic Programming"],
      hours: 6,
      tasks: [
        "Memoization vs Tabulation concepts (2h)",
        "Classic problems: Fibonacci, Climbing Stairs (2h)",
        "0/1 Knapsack problem (2h)"
      ]
    },
    {
      day: 5,
      date: "Day 5",
      topics: ["Mock Exam & Review"],
      hours: 6,
      tasks: [
        "Full syllabus active recall session (2h)",
        "Take a timed 2-hour mock exam (2h)",
        "Review weak areas based on mock results (2h)"
      ]
    }
  ],
  youtube_recs: [
    { title: "Graph Algorithms Crash Course", channel: "Fireship", duration: "12:34" },
    { title: "Dynamic Programming - Learn to Solve Algorithmic Problems", channel: "freeCodeCamp", duration: "5:10:22" },
    { title: "Trees in 100 Seconds", channel: "Fireship", duration: "2:10" }
  ]
};
