#include <iostream>  
#include <glad/glad.h>  
#include <GLFW/glfw3.h>  

int main()  
{  
    glfwInit();  
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);  
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);  
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);  

    GLFWwindow* window = glfwCreateWindow(400, 225, "Khaled Badawy", NULL, NULL);  
    if (window == NULL)  
    {  
        std::cout << "فشل في إنشاء GLFW" << std::endl;  
        glfwTerminate();  
        return -1;  
    }  

    glfwMakeContextCurrent(window);  
    gladLoadGL();  

    glViewport(0, 0, 400, 225);  
    glClearColor(1.0f, 0.6f, 0.2f, 1.0f);  

    while (!glfwWindowShouldClose(window))  
    {  
        glClear(GL_COLOR_BUFFER_BIT);  
        glfwSwapBuffers(window);  
        glfwPollEvents();  
    }  

    glfwDestroyWindow(window);  
    glfwTerminate();  
    return 0;  
}
