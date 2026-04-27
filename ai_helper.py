def generate_study_plan(subject, days, level, hours, syllabus):
    return f"""
    Strategy:
    You have limited time. Focus on high-weight topics.

    High Priority Topics:
    CPU Scheduling, Deadlocks, Memory Management

    Day-wise Plan:
    Day 1-3: Basics + Processes
    Day 4-6: CPU Scheduling
    Day 7-9: Deadlocks
    Day 10-12: Memory Management
    Day 13-15: Revision + PYQs

    Study Method:
    Watch videos → Make short notes → Solve PYQs

    YouTube Topics:
    CPU Scheduling explanation
    Deadlock concepts
    Memory Management quick revision
    """